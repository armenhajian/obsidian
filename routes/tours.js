var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    req.db.collection('products').find({}, (err, products) => {
        try {
            req.db.collection('categories').find({}, (err, categories) => {
                try {
                    const days = [];
                    let filteredProducts = null;
                    products.map(product => {
                        if (days.indexOf(product.days) < 0) {
                            days.push(product.days)
                        }
                        if(req.query && req.query.s && req.query.s.length>0) {
                            if(!filteredProducts) {
                                filteredProducts = [];
                            }
                            if(product['name_'+req.cookies.lang].toLowerCase().indexOf(req.query.s.toLowerCase()) > -1) {
                                filteredProducts.push(product);
                            }
                        }
                    });
                    console.log(filteredProducts);
                    res.render('tours/index', {
                        tours: filteredProducts !== null ? filteredProducts : products,
                        categories: categories,
                        days: days,
                        currencySymbol: '&pound;',
                        selectedLanguage:req.cookies.lang,
                        languages: req._languages
                    });
                } catch (e) {
                    console.log('error----', e)
                }
            })

        } catch (e) {
            console.log('error----', e)
        }

    });
});

router.get('/filter', function (req, res, next) {

    const filter = {};
    if(req.query.days != -1) {
        filter.days = req.query.days;
    }
    if(req.query.category != -1) {
        filter.category = req.query.category;
    }
    req.db.collection('products').find(filter, (err, products) => {
        try {
            res.end(res.render('tours/tours', {
                tours: products,
                currencySymbol: '&pound;',
                selectedLanguage:req.cookies.lang,
                languages: req._languages
            }));

        } catch (e) {
            console.log('error----', e)
        }

    });
});

router.get('/:tour', function (req, res, next) {

    req.db.collection('products').find({slug: req.params.tour}, (err, product) => {
        try {
            console.log(product)
            res.render('tours/tour', {
                tour: product[0],
                currency: 'GBP',
                currencySymbol: '&pound;',
                selectedLanguage:req.cookies.lang,
                languages: req._languages
            });
        } catch (e) {
            console.log('error----', e)
        }

    });
});

module.exports = router;
