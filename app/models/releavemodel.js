var mongoose=require('mongoose');
var releaveschema=mongoose.Schema({
                    employeeid:Number,
                    releaveInfoDate:String,
                    discussionDate:String,
                    releaveStartDate:String,
                    releaveEndDate:String
                            })

module.exports=mongoose.model('releaveinfo',releaveschema);
