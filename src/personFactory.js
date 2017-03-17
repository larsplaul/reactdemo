

class PersonFactory {
 
 constructor() {
      this._persons = []
   }

   fetchPersons = (cb) =>{
     fetch("http://localhost:4567/api/persons")
        .then(res => {
         return  res.json()
        })
        .then(res => {
          this._persons = res;
          cb(); //Notify that data is ready
        })
   }

   get persons() {
     return this._persons;
   }
}

export default new PersonFactory();