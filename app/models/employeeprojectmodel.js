/**
 * Created by zendynamix on 25-11-2016.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    companyFromConfig=require('../fromConfig/employeeproject.json')
schemaObject=require('../utility').fromSchema.fromSchemaBasedOnJson(companyFromConfig);
var employeeprojectSchema = new mongoose.Schema(
    schemaObject,{collection: "employeeprojectDetails"});

module.exports =mongoose.model('employeeprojectDetails',employeeprojectSchema);