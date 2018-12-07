/**
 * Created by zendynamix on 25-11-2016.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    companyFromConfig=require('../fromConfig/usersalary.json')
schemaObject=require('../utility').fromSchema.fromSchemaBasedOnJson(companyFromConfig);
var usersalarySchema = new mongoose.Schema(
    schemaObject,{collection: "usersalaryDetails"});

module.exports =mongoose.model('usersalaryDetails',usersalarySchema);