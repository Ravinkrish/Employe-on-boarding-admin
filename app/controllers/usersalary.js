/**
 * Created by zendynamix on 25-11-2016.
 */
var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    usersalaryDetailsModel = mongoose.model('usersalaryDetails');
usersalaryFromConfig=require('../fromConfig/usersalary.json')
schemaUtility=require('../utility').fromSchema
module.exports = function (app){
    app.use('/', router);
};

router.get('/usersalaryJsonConfig', function (req, res) {
    res.send(usersalaryFromConfig);
});

router.post('/usersalaryDetails', function(req, res, next) {
    var newusersalaryDetails = new usersalaryDetailsModel(req.body);
    newusersalaryDetails.save(function(err) {
        if (err){
            console.log('Error in Saving user: '+err);
        }
        res.send("usersalary Details added sucessfully");
    });

})

router.get('/usersalaryDetails/count', function (req, res){
    usersalaryDetailsModel.count(function(err,usersalaryCount){
        if(err)
            res.send(err);
        var count = {usersalaryCount: usersalaryCount};
        res.send(count);
    });
})

router.get('/usersalaryDetails/:start/:range', function (req, res) {
    console.log("server side")
    usersalaryDetailsModel.find({},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    }).skip(parseInt(req.params.start)).limit(parseInt(req.params.range))
})

router.delete('/usersalaryDetails/:id', function (req, res){
    usersalaryDetailsModel.remove({_id:req.params.id},function (err) {
        if(err)
            res.send(err)
        res.send(' usersalaryDetails   Deleted')
    });
})

router.get('/usersalaryDetails', function (req, res) {
    usersalaryDetailsModel.find({},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})


router.post('/usersalaryDetails/update', function (req, res) {
    usersalaryDetailsModel.findOneAndUpdate(
        { "_id" : req.body.mondbId},
        req.body, // document to insert
        {upsert: true, new: true}, // options
        function (err, updatedBike) { // callback
            if (err) console.log('ERROR '+ err);
            else res.json(updatedBike)

        });

})


router.get('/usersalaryDetails/:usersalaryId', function (req, res) {
    console.log(req.params.usersalaryId)
    usersalaryDetailsModel.find({_id:req.params.usersalaryId},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})


router.post('/usersalaryDetails/Name', function (req, res) {
    usersalaryDetailsModel.find({'Name':req.body.Name},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})


router.get('/usersalaryDetailsName', function (req, res) {
    usersalaryDetailsModel.find({},{"_id":0,"Name":1},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})


router.get('/userBasicSalaryByEmployeeid/:employeeid',function(req,res){
usersalaryDetailsModel.find({"Employeeid":req.params.employeeid},{"_id":0,Salary:1},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})