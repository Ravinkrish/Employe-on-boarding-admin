/**
 * Created by zendynamix on 25-11-2016.
 */
var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
     employeeDetailsModel = mongoose.model('employeeDetails'),
employeeprojectFromConfig=require('../fromConfig/employeeproject.json')
schemaUtility=require('../utility').fromSchema
module.exports = function (app){
    app.use('/', router);
};

router.get('/employeeprojectJsonConfig', function (req, res) {
    res.send(employeeprojectFromConfig);
});

router.post('/employeeprojectDetails', function(req, res, next) {
    var newemployeeprojectDetails = new employeeprojectDetailsModel(req.body);
    newemployeeprojectDetails.save(function(err) {
        if (err){
            console.log('Error in Saving user: '+err);
        }
        res.send("employeeproject Details added sucessfully");
    });

})

router.get('/employeeprojectDetails/count', function (req, res){
    employeeprojectDetailsModel.count(function(err,employeeprojectCount){
        if(err)
            res.send(err);
        var count = {employeeprojectCount: employeeprojectCount};
        res.send(count);
    });
})

router.get('/employeeprojectDetails/:start/:range', function (req, res) {
    console.log("server side")
    employeeprojectDetailsModel.find({},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    }).skip(parseInt(req.params.start)).limit(parseInt(req.params.range))
})

router.delete('/employeeprojectDetails/:id', function (req, res){
    employeeprojectDetailsModel.remove({_id:req.params.id},function (err) {
        if(err)
            res.send(err)
        res.send(' employeeprojectDetails   Deleted')
    });
})

router.get('/employeeprojectDetails', function (req, res) {
    employeeprojectDetailsModel.find({},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})


router.post('/employeeprojectDetails/update', function (req, res) {
    employeeprojectDetailsModel.findOneAndUpdate(
        { "_id" : req.body.mondbId},
        req.body, // document to insert
        {upsert: true, new: true}, // options
        function (err, updatedBike) { // callback
            if (err) console.log('ERROR '+ err);
            else res.json(updatedBike)

        });

})


router.get('/employeeprojectDetails/:employeeprojectId', function (req, res) {
    console.log(req.params.employeeprojectId)
    employeeprojectDetailsModel.find({_id:req.params.employeeprojectId},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})


router.get('/employeeprojectDetails/:employeeId', function (req, res) {
    console.log(req.params.employeeprojectId)
    employeeprojectDetailsModel.find({Employeeid:req.params.employeeprojectId},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})








router.post('/employeeprojectDetails/Name', function (req, res) {
    employeeprojectDetailsModel.find({'Name':req.body.Name},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})


router.get('/employeeprojectDetailsName', function (req, res) {
    employeeprojectDetailsModel.find({},{"_id":0,"Name":1},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})
