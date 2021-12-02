const db = require('../models/failForwardModels')

const failForwardController = {};



failForwardController.getState = (req, res, next) => {
    console.log('reached get state')
    const text = 
    `SELECT * FROM public.users u
    LEFT OUTER JOIN public.job_listings jl ON u._id = jl.user_id;`
    db.query(text)
        .then((received) => {
            res.locals.listings = received;
            return next();
        })
}

failForwardController.addJobListing = (req, res, next) => {
    console.log(req.body);
    const params = [ 
        req.body.company, 
        req.body.position, 
        req.body.summary,
        req.body.core_values,
        '1', //FIXME: need to query db to find current user id
        'applied' ]
    const text = 
    `INSERT INTO public.job_listing ()
    VALUES $1 $2 $3 $4 $5 $6`
    qb.query(text, params)
        .then(received => next())
}

failForwardController.deleteJobListing = (req, res, next) => {

}

failForwardController.updateJobListing = (req, res, next) => {
    
}

failForwardController.login = (req, res, next) => {
    params = [ req.body.username, req.body.password ]
    text = 
    `SELECT 1
    FROM public.users
    WHERE username = $1 AND password = $2;`
    db.query(text, params)
        .then((receive) => {
            res.locals.authen = receive;
            return next();
        })
}

module.exports = failForwardController;