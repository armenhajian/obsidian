var express = require('express');
var router = express.Router();
var ejs = require('ejs');
var nodemailer = require('nodemailer');
var Vimeo = require('vimeo').Vimeo;
var vimdeoLib = new Vimeo('2bb4b73b8527c987b403119c6b69cd798b48cff9',
    'pwy4hDDMhBpNwSckwK04V4cj8RHItOKcL/9bN2p2LYyZY3eaqOIkUfi4ADcRQ9fOslCN+u9HvpG6CFV+7kRnRjZdA/kyIdeRMz88x9vMgWCI3ujPoGMt1R6w99kAurDz',
    '9123306d6f400ce877931a20271ee7e7');
var API500px = require('500px');
var api500px = new API500px("9u3RsnM8YPd7SHfCFwRsVbB0dlggODTu0rSCGFWy");


/* GET home page. */
router.get('/', function (req, res, next) {
    req.db.collection('sliders').find({}, (err, sliders) => {
        req.db.collection('products').find({favorite: 'on'}, (err, products) => {
            res.render('index', {
                sliders: sliders,
                favoriteTours: products,
                currencySymbol: '&pound;',
                headerStyle: 'white',
                lang: req.cookies.lang,
                languages: req._languages
            });
        })
    })

});
router.get('/login', function (req, res) {
  res.render('login');
});
router.post('/login', function (req, res) {
  req.db.collection('users').find({
    username:req.body.username,
    password:req.body.password
  }, (err, user) => {
    req.session.user = user ? user[0] : null;
    req.session.save(function(err) {
      // session saved
      console.log('Before redirect: ', req.session);
      res.redirect('/admin');
    });
  });
});
router.post('/changePassword', function(req, res){
  if(!req.session.user) {
    res.redirect('/admin');
  } else {
    if(req.session.user.password === req.body.oldPassword && req.body.password===req.body.repeatedPassword) {
      req.db.collection('users').findAndModify({
        query: {
          username:req.session.user.username,
          password:req.session.user.password
        },
        update: {$set: {password: req.body.password}},
        // upsert:true
      }, (e, d) => {
        res.redirect('/admin');
      });
    } else {
      res.redirect('/admin/#account');
    }

  }
});
router.get('/createAdmin', function (req, res) {
    const admin = {
      username:'admin',
      password:'admin',
      isAdmin: true
    };
    req.db.collection('users').save(admin, () => {
      // res.cookie('env','',{expires: new Date()});
      res.redirect('/admin');
    })

});
router.get('/logout', function (req, res) {
  req.session.user = null;
  res.redirect('/login');
});
router.get('/gallery', function (req, res) {
    res.redirect('/gallery/photos');
});
router.get('/gallery/photos', function (req, res) {
    api500px.photos.getByUsername('toshstepanyan', {
        sort: 'created_at',
        image_size: 21
    }, function (error, results) {
        if (error) {
            console.log(error);
            return;
        }

        res.render('gallery/index', {
            photos: results.photos,
            videos:[],
            languages: req._languages
        })
    });
});
router.get('/gallery/videos', function (req, res) {

    vimdeoLib.request(/*options*/{
        // This is the path for the videos contained within the staff picks channels
        path: '/users/user13916078/videos',
        // This adds the parameters to request page two, and 10 items per page
        query: {}
    }, function (error, body) {
        if (error) {
            console.log(error);
        }

        res.render('gallery/index', {
            videos: body.data,
            photos:[],
            languages: req._languages
        })

    });
});

router.get('/contacts', function (req, res) {
    res.render('contacts', {
        languages: req._languages
    })
});
router.get('/about', function (req, res) {
    res.render('about', {
        languages: req._languages
    })
});
router.get('/individual-tour', function (req, res) {
    res.render('individual-tour', {
        languages: req._languages
    })
});
router.get('/explore-armenia', function (req, res) {
    res.render('explore-armenia', {
        languages: req._languages
    })
});

router.post('/email-tour', function (req, res) {
  const senderEmail = req.body.email;
  const text = `You have order for ${req.body.tour} tour,
                <br>From ${req.body.fromDate} to ${req.body.toDate},
                <br>Quantity: ${req.body.quantity},
                <br>Contact Information:
                <br>${req.body.contactInformation}`;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpass'
    }
  });

// setup email data with unicode symbols
  let mailOptions = {
    from: '<'+senderEmail+'>', // sender address
    to: 'contact@obsidianroad.com', // list of receivers
    subject: '✔ Tour order', // Subject line
    text: text, // plain text body
    // html: '<b>Hello world ?</b>' // html body
  };

// send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);

    res.redirect(req.header('Referer') || '/');
  });
});
module.exports = router;