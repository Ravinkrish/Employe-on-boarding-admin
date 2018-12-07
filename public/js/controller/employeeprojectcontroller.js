singapp.controller("employeeprojectCtrl", function ($scope, employeeprojectService, fromService) {

 $scope.exportAction = function (option) {
        switch (option) {
            case 'pdf':
                $scope.$broadcast('export-pdf', {});
                break;
            case 'excel':
                $scope.$broadcast('export-excel', {});
                break;
            case 'doc':
                $scope.$broadcast('export-doc', {});
                break;
            case 'csv':
                $scope.$broadcast('export-csv', {});
                break;
            default:
                console.log('no event caught');
        }
    };
    $scope.removeRow = function (name) {
        var index = -1;
        var comArr = eval($scope.companies);
        for (var i = 0; i < comArr.length; i++) {
            if (comArr[i].name === name) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            alert("Something gone wrong");

        }
        $scope.companies.splice(index, 1);
    };

    $scope.displayRow = function (company) {
        $scope.displaydata = this.company;

    };

    $scope.sortcolumn = "name";
    $scope.reversesort = false;

    $scope.sortdata = function (column) {
        $scope.reversesort = ($scope.sortcolumn == column) ? !$scope.reversesort : false;
        $scope.sortcolumn = column;
    };
    $scope.getsortclass = function (column) {
        if ($scope.sortcolumn == column) {
            return $scope.reversesort ? 'arrow-down' : 'arrow-up'
        }
        return '';
    };


    // formhide and show

    $scope.formvisible = false;
    $scope.tablevisible = true;
    $scope.showhide = function () {
        $scope.formvisible = $scope.formvisible ? false : true;
        $scope.tablevisible = $scope.tablevisible ? false : true;

    };
    $scope.form2visible = false;
    $scope.showhide2 = function () {
        $scope.form2visible = $scope.form2visible ? false : true;
        $scope.tablevisible = $scope.tablevisible ? false : true;
    };


    $scope.employeeprojectDetails = {
        detailsArray: [],
        updateMessage: "",
        deleteMessage: "",
        mongodbIdForDelete: "",
        editDetailsId: ""
    };

    $scope.employeeprojectEditJsonConfig = {};
    $scope.emptyemployeeprojectFrom = function () {
        $scope.employeeprojectJsonConfig = {}
    };

    $scope.saveemployeeproject = function (employeeprojectDetailsArray) {
        console.log("**************ffffgg***********************");
        console.log("employeeproject det", employeeprojectDetailsArray);
        var employeeprojectDetailsObj = {};
        saveemployeeprojectDetailsToDb(employeeprojectDetailsArray);
        $scope.showhide()
    };

    function saveemployeeprojectDetailsToDb(employeeprojectDetails) {
        $scope.unquieemployeeprojectNameError = "";
        for (var k = 0; k < employeeprojectDetails.length; k++) {
            console.log(employeeprojectDetails.length);
            //alert(employeeprojectDetails.length)
            if (employeeprojectDetails[k].realName === "Name") {

                var obj = {};
                obj.Name = employeeprojectDetails[k].modelValue;
                employeeprojectService.getemployeeprojectDetailsByName(obj).then(function (res) {

                    console.log("hey already", res.data[0]);
                    if (res.data[0]) {


                        $scope.unquieemployeeprojectNameError = "company name already exists";
                        console.log($scope.unquieemployeeprojectNameError)


                    }
                    else {


                        var saveObj = {};
                        var employeeprojectSaveObj = {};
                        for (var k = 0; k < employeeprojectDetails.length; k++) {

                            saveObj = employeeprojectDetails[k];
                            employeeprojectSaveObj[saveObj.realName] = saveObj.modelValue;
                            if (k === employeeprojectDetails.length - 1) {
                                employeeprojectService.saveemployeeprojectDetails(employeeprojectSaveObj).then(function (resultDetails) {

                                        console.log(resultDetails);
                                        $scope.getemployeeprojectDetailsByRange(0)
                                    }, function error(errResponse) {
                                        console.log(errResponse)
                                    }
                                )

                            }

                        }

                    }
                })
            }
        }


    }

    $scope.getemployeeprojectDetailsByRange = function (pageNo) {

        var pageCapacity = 10;
        var start = 0;
        employeeprojectService.getemployeeprojectDetailsByRange(start, pageCapacity).then(function (res) {
            $scope.employeeprojectDetails.detailsArray = res.data;
        })
    };


    $scope.updateemployeeprojectDetailsToDb = function (employeeprojectDetails) {
        var editObj = {};
        var employeeprojectEditObj = {};
        for (var k = 0; k < employeeprojectDetails.length; k++) {
            editObj = employeeprojectDetails[k];
            employeeprojectEditObj[editObj.realName] = editObj.modelValue;
            if (k === employeeprojectDetails.length - 1) {
                console.log("else");
                console.log(employeeprojectEditObj);
                employeeprojectEditObj.mondbId = $scope.employeeprojectDetails.editDetailsId;
                employeeprojectService.updateemployeeprojectDetails(employeeprojectEditObj).then(function (res) {
                    $scope.employeeprojectDetails.updateMessage = res.data;
                    $scope.getemployeeprojectDetailsByRange(0)
                })
            }


        }


        $scope.showhide2()
    };
    $scope.deleteemployeeprojectDetails = function (employeeprojectMongoDbId) {
        employeeprojectService.deleteemployeeprojectDetails(employeeprojectMongoDbId).then(function (res) {
            $scope.employeeprojectDetails.deleteMessage = res.data;
            $scope.getemployeeprojectDetailsByRange(0);
            $('#btnClose').click();
        })
    };

    $scope.getemployeeprojectDetailsById = function (employeeprojectDetails) {


        $scope.employeeprojectDetails.editDetailsId = employeeprojectDetails._id;

        MergeEditFrom(employeeprojectDetails, employeeprojectService.getemployeeprojectFromConfig());
        console.log("**********************");
        console.log(employeeprojectDetails);
        console.log(employeeprojectService.getemployeeprojectFromConfig());
        console.log("**********************");
        /* employeeprojectService.getemployeeprojectDetailsById(mongodbId).then(function(res){

         })*/

        $scope.showhide2()
    };

    function MergeEditFrom(employeeprojectDetails, employeeprojectFromConfig) {
        var obj = {};
        var editObj = {};
        var k = Object.keys(employeeprojectFromConfig);
        k.forEach(function (objkey, index) {
            var obj = {};
            obj.description = employeeprojectFromConfig[k[index]].description;
            obj.modelValue = employeeprojectDetails[objkey];
            obj.type = employeeprojectFromConfig[k[index]].type;
            editObj[objkey] = obj
        });

        var employeeprojectEditObj = fromService.convertJsonToArray(editObj);

        $scope.employeeprojectEditJsonConfig = employeeprojectEditObj;


    }

    $scope.setemployeeprojectDetailsIdFroDelete = function (mongodbId) {

        $scope.employeeprojectDetails.mongodbIdForDelete = mongodbId;

    };
    $scope.getConfigForemployeeprojectSaveFrom = function () {
        var modifiedSaveConfig = fromService.convertJsonToArray(employeeprojectService.getemployeeprojectFromConfig());
        $scope.employeeprojectJsonConfig = modifiedSaveConfig

    };

    function init() {
        $scope.getemployeeprojectDetailsByRange(0);
        $scope.getConfigForemployeeprojectSaveFrom()
    }

    init()
});