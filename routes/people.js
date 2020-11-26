const { index, show, search } = require('../controllers/people');
module.exports = router => {
    router.get('/', index);
    router.get('/people', show);
    router.get('/people/:id', search);
    router.get('/people/:name', search);
    router.get('/people/:age', search);
    router.get('/people/:productselling', search);
    return router;
};