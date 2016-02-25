System.register([], function(exports_1) {
    var LocalDataBase;
    return {
        setters:[],
        execute: function() {
            LocalDataBase = (function () {
                function LocalDataBase() {
                    var starterDB = new window['localStorageDB']("library", localStorage);
                    if (starterDB.isNew()) {
                        starterDB.createTable('todos', ['name', 'done', 'createAt', 'updateAt']);
                        starterDB.commit();
                    }
                    return starterDB;
                }
                LocalDataBase.prototype.insert = function (tabName, data) { };
                LocalDataBase.prototype.commit = function () { };
                LocalDataBase.prototype.deleteRows = function (tabName, query) { };
                LocalDataBase.prototype.insertOrUpdate = function (tableName, query, update) { };
                LocalDataBase.prototype.queryAll = function (tableName, query) {
                    return [];
                };
                return LocalDataBase;
            })();
            exports_1("LocalDataBase", LocalDataBase);
        }
    }
});
//# sourceMappingURL=DataBaseService.js.map