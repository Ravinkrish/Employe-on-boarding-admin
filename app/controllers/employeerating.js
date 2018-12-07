/**
 * Created by zendynamix on 25-11-2016.
 */
var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
     employeeratingDetailsModel = mongoose.model('employeeratingDetails'),
employeeratingFromConfig=require('../fromConfig/employeerating.json')
schemaUtility=require('../utility').fromSchema
module.exports = function (app){
    app.use('/', router);
};

router.get('/employeeratingJsonConfig', function (req, res) {
    res.send(employeeratingFromConfig);
});

router.post('/employeeratingDetails', function(req, res, next) {
console.log(req.body);
    var newemployeeratingDetails = new employeeratingDetailsModel(req.body);
    newemployeeratingDetails.save(function(err) {
        if (err){
            console.log('Error in Saving user: '+err);
        }
        res.send("employeerating Details added sucessfully");
    });

})

router.get('/employeeratingDetails/count', function (req, res){
    employeeratingDetailsModel.count(function(err,employeeratingCount){
        if(err)
            res.send(err);
        var count = {employeeratingCount: employeeratingCount};
        res.send(count);
    });
})

router.get('/employeeratingDetails/:start/:range', function (req, res) {
    console.log("server side")
    employeeratingDetailsModel.find({},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    }).skip(parseInt(req.params.start)).limit(parseInt(req.params.range))
})

router.delete('/employeeratingDetails/:id', function (req, res){
    employeeratingDetailsModel.remove({_id:req.params.id},function (err) {
        if(err)
            res.send(err)
        res.send(' employeeratingDetails   Deleted')
    });
})

router.get('/employeeratingDetails', function (req, res) {
    employeeratingDetailsModel.find({},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})


router.post('/employeeratingDetails/update', function (req, res) {
    employeeratingDetailsModel.findOneAndUpdate(
        { "_id" : req.body.mondbId},
        req.body, // document to insert
        {upsert: true, new: true}, // options
        function (err, updatedBike) { // callback
            if (err) console.log('ERROR '+ err);
            else res.json(updatedBike)

        });

})


router.get('/employeeratingDetails/:employeeratingId', function (req, res) {
    console.log(req.params.employeeratingId)
    employeeratingDetailsModel.find({_id:req.params.employeeratingId},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})


router.get('/employeeratingDetails/:employeeId', function (req, res) {
    console.log(req.params.employeeratingId)
    employeeratingDetailsModel.find({Employeeid:req.params.employeeratingId},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})








router.get('/employeerating/employeeid/:employeeid', function (req, res) {
console.log("ruuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuurrrrrrr");
console.log(req.params.employeeid);
    employeeratingDetailsModel.find({'Employeeid':req.params.employeeid},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
        console.log(result)
            res.send(result)
        }

    })
})


router.get('/employeeratingDetailsName', function (req, res) {
    employeeratingDetailsModel.find({},{"_id":0,"Name":1},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})
