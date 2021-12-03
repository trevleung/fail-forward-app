const db = require('../models/failForwardModels')

const failForwardController = {};



failForwardController.getState = (req, res, next) => {
    console.log('reached get state')
    const text = 
    `SELECT company, position, summary, core_values FROM public.users u
    LEFT OUTER JOIN public.job_listings jl ON u._id = jl.user_id
    WHERE progress = 'applied';`
    db.query(text)
        .then((received) => {
            res.locals.listings = received.rows;
            return next();
        })
}

failForwardController.addJobListing = (req, res, next) => {
    const params = [ req.body.company, req.body.position, req.body.summary, req.body.coreValues, '1', 'applied' ]
    const text = 
    `INSERT INTO public.job_listings (company, position, summary, core_values, user_id, progress)
    VALUES ($1, $2, $3, $4, $5, $6)`
    db.query(text, params)
        .then(received => {
            console.log('query success!');
            return next();})
}

failForwardController.deleteJobListing = (req, res, next) => {
    // const params = [ req.body.level, req.body.id ]
    // const text = 
    // `DELETE FROM public.job_listings 
    // WHERE progress = $1 AND _id ='Alfreds Futterkiste';`
    // db.query(text)
    //     .then(received => next());
}

failForwardController.updateJobListing = (req, res, next) => {
    
}

failForwardController.login = (req, res, next) => {
    console.log('this is req');
    console.log(req.body);
    params = [ req.body.username, req.body.password ]
    text = 
    `SELECT 1
    FROM public.users
    WHERE username = $1 AND password = $2;`
    db.query(text, params)
        .then((receive) => {
            res.locals.authen = receive.rows;
            return next();
        })
}

module.exports = failForwardController;