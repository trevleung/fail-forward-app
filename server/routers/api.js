const express = require('express');
const failForwardController = require('../controllers/failForwardController');
const router = express.Router();

router.get('/', failForwardController.getState, (req, res) => {
    console.log('arrived at response');
    return res.status(200).send(res.locals.listings);
})

router.post('/', failForwardController.addJobListing, (req, res) => {
    return res.sendStatus(200);
})

router.delete('/', failForwardController.deleteJobListing, (req, res) => {
    return res.sendStatus(200);
})

router.put('/', failForwardController.updateJobListing, (req, res) => {
    return res.sendStatus(200);
})


module.exports = router;