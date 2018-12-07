/**
 * Created by zendynamix on 25-11-2016.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    companyFromConfig=require('../fromConfig/project.json')
schemaObject=require('../utility').fromSchema.fromSchemaBasedOnJson(companyFromConfig);
var projectSchema = new mongoose.Schema(
    schemaObject,{collection: "projectDetails"});

module.exports=mongoose.model('projectDetails',projectSchema);