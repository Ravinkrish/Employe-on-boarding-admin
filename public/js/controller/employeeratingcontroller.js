singapp.controller("employeeratingCtrl", function ($scope, employeeratingService, fromService) {

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


    $scope.employeeratingDetails = {
        detailsArray: [],
        updateMessage: "",
        deleteMessage: "",
        mongodbIdForDelete: "",
        editDetailsId: ""
    };

    $scope.employeeratingEditJsonConfig = {};
    $scope.emptyemployeeratingFrom = function () {
        $scope.employeeratingJsonConfig = {}
    };

    $scope.saveemployeerating = function (employeeratingDetailsArray) {
        console.log("**************ffffgg***********************");
        console.log("employeerating det", employeeratingDetailsArray);
        var employeeratingDetailsObj = {};
        saveemployeeratingDetailsToDb(employeeratingDetailsArray);
        $scope.showhide()
    };

    function saveemployeeratingDetailsToDb(employeeratingDetails) {
        $scope.unquieemployeeratingNameError = "";
        for (var k = 0; k < employeeratingDetails.length; k++) {
            console.log(employeeratingDetails.length);
            console.log(employeeratingDetails);
            //alert(employeeratingDetails.length)
            if (employeeratingDetails[k].realName === "Employeeid") {


                Employeeid = employeeratingDetails[k].modelValue;
                console.log(Employeeid);
                employeeratingService.getemployeeratingDetailsByemployeeid(Employeeid).then(function (res) {

                    console.log("hey already", res.data[0]);
                    if (res.data[0]) {


                        $scope.unquieemployeeratingNameError = "company name already exists";
                        console.log($scope.unquieemployeeratingNameError)


                    }
                    else {


                        var saveObj = {};
                        var employeeratingSaveObj = {};
                        for (var k = 0; k < employeeratingDetails.length; k++) {

                            saveObj = employeeratingDetails[k];
                            employeeratingSaveObj[saveObj.realName] = saveObj.modelValue;
                            if (k === employeeratingDetails.length - 1) {
                                employeeratingService.saveemployeeratingDetails(employeeratingSaveObj).then(function (resultDetails) {

                                        console.log(resultDetails);
                                        $scope.getemployeeratingDetailsByRange(0)
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

    $scope.getemployeeratingDetailsByRange = function (pageNo) {

        var pageCapacity = 10;
        var start = 0;
        employeeratingService.getemployeeratingDetailsByRange(start, pageCapacity).then(function (res) {
            $scope.employeeratingDetails.detailsArray = res.data;
        })
    };


    $scope.updateemployeeratingDetailsToDb = function (employeeratingDetails) {
        var editObj = {};
        var employeeratingEditObj = {};
        for (var k = 0; k < employeeratingDetails.length; k++) {
            editObj = employeeratingDetails[k];
            employeeratingEditObj[editObj.realName] = editObj.modelValue;
            if (k === employeeratingDetails.length - 1) {
                console.log("else");
                console.log(employeeratingEditObj);
                employeeratingEditObj.mondbId = $scope.employeeratingDetails.editDetailsId;
                employeeratingService.updateemployeeratingDetails(employeeratingEditObj).then(function (res) {
                    $scope.employeeratingDetails.updateMessage = res.data;
                    $scope.getemployeeratingDetailsByRange(0)
                })
            }


        }


        $scope.showhide2()
    };
    $scope.deleteemployeeratingDetails = function (employeeratingMongoDbId) {
        employeeratingService.deleteemployeeratingDetails(employeeratingMongoDbId).then(function (res) {
            $scope.employeeratingDetails.deleteMessage = res.data;
            $scope.getemployeeratingDetailsByRange(0);
            $('#btnClose').click();
        })
    };

    $scope.getemployeeratingDetailsById = function (employeeratingDetails) {


        $scope.employeeratingDetails.editDetailsId = employeeratingDetails._id;

        MergeEditFrom(employeeratingDetails, employeeratingService.getemployeeratingFromConfig());
        console.log("**********************");
        console.log(employeeratingDetails);
        console.log(employeeratingService.getemployeeratingFromConfig());
        console.log("**********************");
        /* employeeratingService.getemployeeratingDetailsById(mongodbId).then(function(res){

         })*/

        $scope.showhide2()
    };

    function MergeEditFrom(employeeratingDetails, employeeratingFromConfig) {
        var obj = {};
        var editObj = {};
        var k = Object.keys(employeeratingFromConfig);
        k.forEach(function (objkey, index) {
            var obj = {};
            obj.description = employeeratingFromConfig[k[index]].description;
            obj.modelValue = employeeratingDetails[objkey];
            obj.type = employeeratingFromConfig[k[index]].type;
            editObj[objkey] = obj
        });

        var employeeratingEditObj = fromService.convertJsonToArray(editObj);

        $scope.employeeratingEditJsonConfig = employeeratingEditObj;


    }

    $scope.setemployeeratingDetailsIdFroDelete = function (mongodbId) {

        $scope.employeeratingDetails.mongodbIdForDelete = mongodbId;

    };
    $scope.getConfigForemployeeratingSaveFrom = function () {
        var modifiedSaveConfig = fromService.convertJsonToArray(employeeratingService.getemployeeratingFromConfig());
        $scope.employeeratingJsonConfig = modifiedSaveConfig
        console.log(modifiedSaveConfig);

    };

    function init() {
        $scope.getemployeeratingDetailsByRange(0);
        $scope.getConfigForemployeeratingSaveFrom()
    }

    init()
});