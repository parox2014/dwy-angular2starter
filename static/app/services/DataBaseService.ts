
export class LocalDataBase{
  constructor(){
    var starterDB = new window['localStorageDB']("library", localStorage);

    if(starterDB.isNew()){
      starterDB.createTable('todos',['name','done','createAt','updateAt']);

      starterDB.commit();
    }

    return starterDB;
  }
}