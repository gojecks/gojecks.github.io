(function() {

    'use strict';
    var module = jEli
        .jModule('eliTest', {
            delimiter: ['${', '}']
        });

    module
        .jValue('restricted', 12345524452425)
        .jConfig(["jDebugProvider", function(jDebugProvider) {
            jDebugProvider.$disableDebugMode = false;
            //$templateCache.$set('/ui/app/directive/temp.html','<solo-test></solo-test>');	
        }])
        .jConfig(["$httpProvider", function($httpProvider) {
            $httpProvider.interceptors.push('authInterceptorError');
        }])
        .jService('serviceTest', ["restricted", function(restricted) {
            var name = "";
            this.setName = function(value) { name = value; };
            this.getName = function() { return restricted };
        }])
        .jFactory('authInterceptorError', ["testFactory", function(fac) {
            return ({
                request: request
            });

            function request(options) {
                return options;
            }
        }])
        .jFactory('testFactory', function() {
            this.testName = "I tested you";
            return this;
        })
        .jFactory('simpleTest', ["dateTimeFactory", function(dateTimeFactory) {
            return function() {
                console.log(dateTimeFactory.$timeConverter())
            };
        }])
        .jFactory('anotherFactory', ['testFactory', function(testFactory) {
            this.changeName = function(name) {
                testFactory.testName = name;
            };

            this.getName = function() {
                return testFactory.testName;
            }

            this.log = function() {
                console.log(jEliWebProvider.getRoute());
            };

            return this;
        }])
        .jController('testController', ['$scope', '$http', '$rootModel', 'serviceTest', function($model, $http, $rootModel, svc) {
            var nSvc = new svc();
            $model.testCheckbox = 1;
            $model.item = [{ name: "test 1" }, { name: "test 2" }, { name: "test 3" }, { name: "test 4" }, { name: "test 5" }, { name: "test 6" }];
            $model.addData = function() {
                var no = $model.item.length + 1;
                $model.item.push({ name: "test " + no });
            }

            $model.emptyData = function() {
                $model.item = [];
            };

            $model.testMe = function(item, val) {
                item.name = 'I changed you';
            };


            $model.testLoader = function() {

                return 'http://localhost/apps/android/htmlEli-include-test.html';
            };

            $model.setChangeLoader = function() {
                $model.testLoader = 'http://localhost/apps/android/htmlEli-include-test.php';
                $model.testItem = [{
                    name: "Test 01",
                    others: [{
                        message: "I was injected",
                        test: [{
                            message: "New loop for test"
                        }]
                    }]
                }];
            };

            $model.listChanged = function() {
                $model.addData();
            };

            $model.$on('$viewContentLoaded', function() {
                console.log('Content Loaded')
            });


        }])
        .jController('nextTest', ['$scope', function($model) {

            $model.citem = [];
            $model.newTest = "Created New Controller";

            $model.addData = function() {
                var no = $model.citem.length + 1;
                $model.citem.push({ name: "test " + no });
            };
            $model.emptyData = function() {
                $model.citem = [];
            }

            $model.logicMode = function() {
                return $model.citem.length;
            }
        }])
        .jElement('eliTestDirective', ["anotherFactory", "$jCompiler", function(anotherFactory, $jCompiler) {
            return {
                allowType: 'ACE',
                model: {
                    dirNameTest: "&setNameType",
                    setItem: "&setItemType"
                },
                $init: function(ele, attr, scope) {
                    scope.clickMe = function() {
                        scope.setItem.splice(0, 1);
                    };
                }
            };
        }])
        .jElement('soloTest', ["testFactory", function(testFactory) {
            return {
                allowType: 'A',
                templateUrl: 'http://localhost/apps/android/solo-test.html',
                $init: function(ele, attr, scope) {
                    scope.createdTest = "I am testing this";
                    scope.fromWatch = "";
                    scope.$watch('createdTest', function(newValue) {
                        scope.fromWatch = newValue;
                    });

                }
            };
        }])
        .jElement('tableTester', ["anotherFactory", function(anotherFactory) {

            return {
                allowType: 'AE',
                $init: function(ele, attr, scope) {
                    scope.$list = [];
                    scope.createNewList = function(amount) {
                        scope.clear();
                        if (amount) {
                            for (var i = 0; i <= amount; i++) {
                                scope.$list.push({ name: 'Test Listing', no: i });
                            }
                        }
                    };
                    scope.clear = function() {
                        scope.$list = [];
                    };

                    scope.alert = function(item) {
                        $webState.go('/home').replaceWebState();
                    }

                }
            }
        }])
        .jController('baseCtrl', ["$scope", "$rootModel", function($scope, $rootModel) {
            $scope.$on('$webRouteStart', function(event, route) {
                // $webState.go().replaceWebState('/FakePath');
            });

            $scope.$on('$webRouteSuccess', function(event, currentRoute, currentParams, previousRoute, previousParams) {

            });
            $scope.showTheatre = false;
            $scope.quickTest = [{ name: 'Tom', id: 1 }, { name: 'Gom', id: 2 }, { name: 'Dom', id: 3 }, { name: 'Tom', id: 4 }, { name: 'Jum', id: 6 }];
            $scope.initialize = function(obj) {
                console.log(arguments);
            };

            $scope.twoWayModel = "I wrote this first";
            $scope.twoWayModels = "Two way Models";

        }])
        .jElement('messages', function() {
            return {
                allowType: 'E',
                model: {
                    message: "="
                },
                template: '<div j-for="message in message" class="well"><h6>{%message.From | uppercase%}</h6><small>{%message.message%} <input type="text" j-model="message.message" fire-test></small></div><div><textarea class="form-group" j-keyup="update($event)" j-model="myBindingTest"></textarea></div>',
            }
        })
        .jFilter('fakeFilter', function() {
            return function(text, replacer) {
                if (jEli.$isObject(replacer)) {
                    for (var i in replacer) {
                        text = text.replace(i, replacer[i])
                    }
                }

                return text;
            }
        })
        .jElement('moreElement', function() {
            return {
                allowType: 'AEC',
                $init: function(ele, attr, model) {
                    model.message.push({
                        From: "more element directive",
                        message: 'Quick Test'
                    });
                    model.$consume();
                    model.update = function($event) {
                        if ($event.keyCode === 13) {
                            var ele = jEli.dom($event.target),
                                val = ele.val();
                            model.message.push({
                                From: "Textarea",
                                message: val
                            });
                            ele.val('');
                        }
                    };
                }
            }
        })
        .jElement('filteredList', function() {
            return {
                template: '<div class="filter-list"><input type="text" placeholder="Search" j-keyup="filterList($event)" /><list></list></div>',
                allowType: 'AE',
                $init: function(ele, attr, scope) {
                    var initialItems = [
                        "Apples",
                        "Broccoli",
                        "Chicken",
                        "Duck",
                        "Eggs",
                        "Fish",
                        "Granola",
                        "Hash Browns"
                    ];

                    scope.filterList = function(event) {
                        var updatedList = initialItems;
                        updatedList = updatedList.filter(function(item) {
                            return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
                        });

                        scope.items = updatedList;
                    };

                    scope.items = initialItems;
                }
            }
        })
        .jElement('list', function() {
            return {
                template: ' <ul><li j-for="(idx,item) in items">${:item | uppercase}</li></ul>'
            }
        });


    // test components
    module
        .jComponent({
            "selector": "app-component",
            "templateUrl": "template/app.component.html",
            "props": {
                "items": "?=",
                "twoWayModel": "?=",
                "twoWayModels": "=",
                onUpdate: "&"
            },
            "controller": AppComponentController,
            "controllerDI": ["anotherFactory", "$model"],
            "style": 'input{color:red}',
            "controllerAs": "$app"
        });


    function AppComponentController(anotherFactory, $model) {
        this.name = anotherFactory.getName();
        this.items = [];
        this.loaded = true;
        this.$model = $model;
    }

    AppComponentController.prototype.onInit = function() {
        this.$model.loaded = true;
    };

    AppComponentController.prototype.onClick = function() {
        this.$model.loaded = !this.$model.loaded;
    }


})();