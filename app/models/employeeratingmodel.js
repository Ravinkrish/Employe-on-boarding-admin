
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    companyFromConfig=require('../fromConfig/employeerating.json')
schemaObject=require('../utility').fromSchema.fromSchemaBasedOnJson(companyFromConfig);
var employeeratingSchema = new mongoose.Schema(
    schemaObject,{collection: "employeeratingDetails"});

module.exports =mongoose.model('employeeratingDetails',employeeratingSchema);