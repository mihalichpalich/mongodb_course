//use itproger 
//создание БД

// db.createCollection("users") - создание коллекции

db.users.bulkWrite([
  {
	insertOne: {
		document: {name: "John", age: 45, email: "mike@test.ru"}
	}
  },
  {
	deleteOne: {
		filter: {age: 21}
	}
  },
  {
	updateMany: {
		filter: {name: "Боб"},
		update: {$set: {email: "new_email@test.ru"}}
	}
  },
  {
	replaceOne: {
		filter: {name: "John"},
		replacement: {name: "Джон", age: 45, email: "john@mail.ru"}
	}
  }
]);
