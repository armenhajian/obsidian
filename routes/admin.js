const express = require('express');
const multer = require('multer');
const mongojs = require('mongojs');
const router = express.Router();
const fs = require('fs');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, global.appRoot+'/public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, '_' + Date.now() + '_' + Math.floor(Math.random() * 10) + file.originalname)
    }
});
const upload = multer({storage: storage});
const cpUpload = upload.fields([{name: 'avatar', maxCount: 1}, {name: 'gallery', maxCount: 100}]);

router.get('/', (req, res, next) => {
    req.db.collection('products').find({}, (err, products) => {

        req.db.collection('categories').find({}, (err, categories) => {
            req.db.collection('sliders').find({}, (err, sliders) => {
                req.db.collection('languages').find({}, (err, languages) => {
                    if(languages.length === 0) {
                        languages.push({
                            checked: true,
                            name: 'English'
                        });
                    }
                    fs.readFile(appRoot  + '/i18n/'+req.cookies.lang+'.json', (err, data)=>{
                        res.render('admin', {
                            title: 'Tours',
                            products: products,
                            categories: categories,
                            sliders: sliders,
                            languages: languages,
                            translations: data,
                            selectedLanguage:req.cookies.lang
                        });
                    });
                });
            })
        });
    });
});
router.post('/product', cpUpload, (req, res) => {
    const data = req.body;

    req.files['avatar'] && req.files['avatar'].length ? data.avatar = req.files['avatar'][0] : null;

    if (data._id) {
        const id = data._id;
        data.old_gallery = data.old_gallery ? JSON.parse(data.old_gallery) : [];
        data.deleted_img = data.deleted_img ? JSON.parse(data.deleted_img) : [];
        let newGallery = data.old_gallery;
        data.deleted_img.map(img => {
            data.old_gallery.map((i, idx) => {
                if (img.path && i.path == img.path) {
                    newGallery.splice(idx, 1);
                }
            });
            if (fs.existsSync(img.path)) {
                fs.unlink(img.path);
            }
        });
        delete data._id;
        delete data.old_gallery;
        delete data.deleted_img;

        if (!req.files['gallery'])
            req.files['gallery'] = [];
        data.gallery = req.files['gallery'].concat(newGallery);
        req.db.collection('products').findAndModify({
            query: {_id: mongojs.ObjectId(id)},
            update: {$set: data},
            // upsert:true
        }, (e, d) => {
            res.redirect('/admin');
        });
    } else {
        req.files['gallery'] && req.files['gallery'].length ? data.gallery = req.files['gallery'] : [];
        req.db.collection('products').save(data, () => {
            res.redirect('/admin');
        });
    }
});
router.delete('/product', (req, res) => {
    req.db.collection('products').remove({_id: mongojs.ObjectId(req.body.id)}, (err, data) => {
        res.end();
    })
});

router.get('/category', (req, res) => {
    req.db.collection('categories').find({}, (err, categories) => {
        res.render('admin', {
            title: 'Tours',
            categories: categories
        });
    })
});
router.post('/category', (req, res) => {
    req.db.collection('categories').find(req.body, (err, docs) => {
        if (docs.length === 0) {
            req.db.collection('categories').save(req.body, () => {
                res.redirect('/admin#categories');
            })
        } else {
            res.redirect('/admin#categories');
        }
    })

});
router.delete('/category', (req, res) => {
    req.db.collection('categories').remove({name: req.body.name}, (err, data) => {
        res.end();
    })
});

router.get('/slider', (req, res) => {
    req.db.collection('sliders').find({}, (err, sliders) => {
        res.render('admin', {
            title: 'Sliders',
            sliders: sliders,
        });
    })
});
router.post('/slider', cpUpload, (req, res) => {
    const data = req.body;
    data.image = req.files['avatar'][0];
    req.db.collection('sliders').save(data, () => {
        res.redirect('/admin#sliders');
    })
});
router.delete('/slider', (req, res) => {
    req.db.collection('sliders').findOne({_id: mongojs.ObjectId(req.body._id)}, (err, slider) => {
        if (fs.existsSync(slider.image.path)) {
            fs.unlink(slider.image.path);
        }

        req.db.collection('sliders').remove({_id: mongojs.ObjectId(req.body._id)}, (err, data) => {
            res.redirect('/admin#sliders');
        })
    })

});

router.post('/languages', (req, res) => {
    // console.log('sdfsdfsdf ', JSON.parse(req.body.data));
    var data = JSON.parse(req.body.data).map(id => {
        return mongojs.ObjectId(id)
    });
    req.db.collection('languages').update({_id: {$nin: data}},
        {$set: {checked: false}},
        {multi:true});
    req.db.collection('languages').update({_id: {$in: data}},
        {$set: {checked: true}},
        {multi:true});

    res.redirect('/admin#languages');

});
router.get('/translations', (req, res)=>{
    fs.readFile(appRoot  + '/i18n/'+req.query.lang+'.json', (err, data)=>{
        if(err) {
            data = "";
        }
        res.send(data);
    });
});
router.post('/translations', (req, res) => {
    // console.log(req.body);
    fs.writeFile(appRoot  + '/i18n/'+req.body.lang+'.json', req.body.data, (err)=>{
        console.log(err);
        res.redirect('/admin#translations');
    })
});
module.exports = router;