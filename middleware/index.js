function logIncomming(req, res, next) {
    req.pageInfo = {
        title: ""
    }
    
    console.log(req.session);
    return next();
};

module.exports.logIncomming = logIncomming;