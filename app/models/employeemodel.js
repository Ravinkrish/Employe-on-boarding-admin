var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    Name: String,
    Employeenumber:String,
    FirstName:String,
    LastName:String,
    Mobilephone:String,
    Emailid:String,
    Department:String,
    Designation:String,
    Gender:String,
    Supervisor:String,
    images:String,
    Skillsdata:[{
    Skill:String,
    SkillDetails:String
    }],
    Qualification:String,
    InstituteName:String,
    StartDate:String,
    CompletedOn:String,
    Certification:String,
    Institute:String,
    GrantedOn:String,
    ValidThru:String,
    Language:String,
    Reading:String,
    Speaking:String,
    Writing:String,
    Understanding:String,
    DependentName:String,
    DateOfBirth:String,
    IdProofNumber:String,
    EmployeeRelationship:String,
    HomePhone:String,
    WorkPhone:String,
    EmergencyMobilePhone:String,
    Document:String,
    Details:String,
    Status:String,
    BankAccountHolderName:String,
    AccountNo:String,
    IFSCCode:String,
    NameOfTheBank:String,
    AddressOfTheBank:String,
    Emailsent:String,
    isapproved:String,
    currentemployee:Number,
    servingnoticeperiod:Number,
    releavedemployee:Number
});
module.exports = mongoose.model("employee", employeeSchema);




























