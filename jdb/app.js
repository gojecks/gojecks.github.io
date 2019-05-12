(function() {

    'use strict';
    jeli('jelijs.jDB', {
            requiredModules: ['jeli']
        })
        .element({
            selector: 'app-root',
            template: '<j-place selector="nav"> </j-place> <j-place selector=".container"> </j-place>',
            DI: ["$sessionStorage", 'ElementRef']
        }, AppRootElementController)
        .element({
            selector: 'handle-scroll',
            DI: ['$window', 'ElementRef']
        }, handleScrollFn);

    function handleScrollFn() {
        this.didInit = function() {
            // $window.on('scroll', function(e) {
            //     if (this.scrollY > 510) {
            //         ele.css('top', '70px');
            //     } else {
            //         ele.removeAttr('style');
            //     }
            // });

            // jEli.dom('li a', ele)
            // .bind('click', function() {
            //     jEli.dom('li', ele).removeClass('active');
            //     jEli.dom(this).parents().addClass('active');
            // })
        };
    }

    //BaseCtrl Fn
    function AppRootElementController($sessionStorage, elementRef) {
        var db = null,
            self = this,
            errorHandler = function(o) { console.log(o) },
            successHandler = function(e) { console.log("Success:", e) },
            cmdLockState = false,
            cmdFinishState = false,
            lastRunQuery = '';
        this.db = {
            name: 'test',
            version: 1
        };
        this.activeDb = false;
        this.searchResult = [];
        this.newData = {};
        this.queryString = "";
        this.queryBuilder = "";
        this.mode = 'learn';

        function logController() {
            this.console = null;
            this.print = function(msg) {
                if (this.console) {
                    this.console.value = (this.console.value + '\n ' + msg);
                    this.console.focus();
                }
            };

            this.clearScreen = function() {
                var self = this;
                setTimeout(function() {
                    self.console.value = "";
                }, 100);
            };
        }

        //command prompt
        var logController = new logController();
        //getServiceHost
        function getServiceHost(addPath) {
            var loc = location,
                domain = loc.protocol + "//" + addPath + '.' + loc.hostname;

            return domain;
        }

        function connectDB(connectDetails) {
            var req = new jdb(connectDetails.name, connectDetails.version)
                .open({
                    logService: function(msg) {
                        if (msg) {
                            setMessage(msg);
                        }
                    },
                    storage: 'sessionStorage'
                });

            req.onCreate(function(e) {
                var schema = [{ id: { type: "INT", AUTO_INCREMENT: true }, firstName: { type: "VARCHAR" }, lastName: { type: "VARCHAR" } }]
                e.result.createTbl('users', schema)
                    .onError(console.log);
            });

            req.onSuccess(function(e) {
                self.activeDb = true;
                db = e.result;
                self.dbName = db.name;
                self.dbVersion = db.version;
                self.tables = db.info();
                window.db = db;
                //sessionStorage
                $sessionStorage.setItem("activeSession", JSON.stringify(connectDetails));
                elementRef.context.tick();
                logController.console = document.querySelector('textarea');
            });
        }

        this.didInit = function() {
            //check active session
            if ($sessionStorage.getItem('activeSession')) {
                var connection = JSON.parse($sessionStorage.getItem('activeSession'));
                connectDB(connection);
                this.activeDb = true;
            }
        }

        this.$disconnect = function() {
            //disconnect from DB
            $sessionStorage.removeItem('activeSession');
            this.activeDb = !1;
            db.close(true);
        };

        //synchronize the table
        this.syncTable = function(tblName) {
            db
                .synchronize()
                .Entity(db.name)
                .configSync({
                    serviceHost: 'http://ws.jdb.bezynet.com',
                    logService: function(msg) {
                        setMessage(msg);
                    }
                })
                .processEntity();
        };


        //create
        this.$create = function() {
            if (this.db.name && this.db.version) {
                connectDB(this.db);
            }
        };
        //DB Function binding test
        this.searchTable = function($table, queryString) {
            if (queryString) {
                this.queryBuilder = "SELECT:" + queryString + " FROM:" + $table;
                this.runQuery();
            }
        };

        function getTextAreaLine(myString) {
            return myString.substring(myString.lastIndexOf('\n') + 1, myString.length);
        }

        this.queryMessage = "";
        this.commandPrompt = function($ev) {
            if ($ev.keyCode === 13) {
                var query = getTextAreaLine($ev.currentTarget.value);
                $ev.preventDefault();
                //run query
                this.runQuery(query);
                cmdLockState = true;
                lastRunQuery = query;
            }
        };

        function setMessage(msg) {
            setTimeout(function() {
                logController.print(msg);
            }, 100);
        }

        function setCMDState() {
            cmdLockState = false;
            setMessage('\n');
        }

        function queryHandler() {
            this.onSuccess = function(ret) {
                switch (ret.state) {
                    case ("insert"):
                    case ("delete"):
                    case ("update"):
                    case ("create"):
                    case ("truncate"):
                    case ("drop"):
                    case ("alter"):
                    case ("sync"):
                    case ("import"):
                        if (ret.result.message) {
                            self.tables = db.info();
                            setMessage(ret.result.message);
                        }
                        break;
                    case ("select"):
                        setMessage(ret.jDBNumRows() + " record(s) found");
                        self.searchResult = ret.getResult();
                        break;
                    case ("help"):
                        for (var i in ret.result.message) {
                            setMessage(ret.result.message[i]);
                        }
                        break;
                    case ('cls'):
                        logController.clearScreen();
                        break;
                    default:
                        setMessage(ret.result.message);
                        self.searchResult = [];
                        break;

                }

                setCMDState();
            };

            this.onError = function(ret) {
                if (ret.message) {
                    setMessage(ret.message);
                }

                setCMDState();
            };
        }

        this.runQuery = function(query, set) {
            if (query) {
                if (set) {
                    setMessage(query);
                }

                setMessage('Performing Task...');
                db.jQl(query, new queryHandler());
            }
        };

        this.importFile = function() {
            console.log('importing file');
        }

        this.addDataTable = function(table, type) {
            var formData = type[table];
            if (formData) {
                //insert the info using jDB Query
                this.runQuery("-INSERT -" + JSON.stringify([formData]) + " -" + table, 1);
            }
        };

        this.truncateTable = function(tblName) {
            if (tblName) {
                this.runQuery("-TRUNCATE -" + tblName + " -no", 1);
            }
        };

        this.setMode = function(mode) {
            this.mode = mode;
        };

        this.getMode = function(mode) {
            return this.mode === mode;
        };

        this.dropTable = function(tblName) {
            if (tblName) {
                this.runQuery("-DROP -table -" + tblName + " -no", 1);
            }
        }

    }
    jeli.app.bootstrapWith('jelijs.jDB', 'app-root');
})();