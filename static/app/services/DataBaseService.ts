
export class LocalDataBase{
  constructor(){
    var starterDB = new window['localStorageDB']("library", localStorage);

    if(starterDB.isNew()){
      starterDB.createTable('todos',['name','done','createAt','updateAt']);

      starterDB.commit();
    }

    return starterDB;
  }
  insert(tabName:string,data:Object){}
  commit(){}
  deleteRows(tabName:string,query:Object){}
  insertOrUpdate(tableName:string,query:Object,update:Object){}
  queryAll(tableName:string,query:Object):Array<any>{
    return [];
  }
}