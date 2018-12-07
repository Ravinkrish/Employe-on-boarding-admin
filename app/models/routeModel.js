var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var ElectionResultSchema = new mongoose.Schema(
{
       fullName:String,
       email:String,
       password:String,
       education:String,
       skills:String,
       docUpload:String

},
{collection:"routeDetails"});
mongoose.model('routeDetails',ElectionResultSchema);