var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    releavemodel = mongoose.model('releaveinfo');

module.exports = function (app){
    app.use('/', router);
};


router.post('/releaveinfo', function(req, res) {
    var newreleavemodel = new releavemodel(req.body);
    newreleavemodel.save(function(err) {
        if (err){
            console.log('Error in Saving user: '+err);
        }
        res.send("releaveinfo Details added sucessfully");
    });

})


router.get('/getreleaveinfo', function(req, res) {

    releavemodel.find({},function(err,result) {
        if (err){
            console.log('Error in Saving user: '+err);
        }
        res.send(result);
    })

})

router.post('/setEmployeeDiscussionDate/:mongoid/:date', function(req, res) {

    releavemodel.findOneAndUpdate({_id:req.params.mongoid},{$set:{discussionDate:req.params.date}},function(err,result) {
        if (err){
            console.log('Error in Saving user: '+err);
        }
        res.send(result);
    });

})


router.post('/approveEmployeeInfo', function(req, res) {

    releavemodel.findOneAndUpdate({_id:req.params.mongoid},{$set:{discussionDate:req.params.date}},function(err,result) {
        if (err){
            console.log('Error in Saving user: '+err);
        }
        res.send(result);
    });

})



router.post('/approveEmployeeInfo/:startdate/:enddate/:mongoid', function(req, res) {
console.log(req.params);
    releavemodel.findOneAndUpdate({_id:req.params.mongoid},{$set:{releaveStartDate:req.params.startdate,releaveEndDate:req.params.enddate}},function(err,result) {
        if (err){
            console.log('Error in Saving user: '+err);
        }
        res.send(result);
    });

})

