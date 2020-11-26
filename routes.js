//const { Router } = require("express")
module.exports = router => {
    require('./routes/people')(router);
    return router;
}