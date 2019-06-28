// use itproger - создание БД
// db.createCollection("users") - создание коллекции

db.users.updateOne({age: 22}, {$set: {age: 25}}); //обновит 1-ое значение в списке
db.users.updateMany({age: 25}, {$set: {age: 23}});
db.users.updateMany({age: 23}, {$set: {name: "User", email: "test@mail.ru"}});
db.users.replaceOne(
	{age: 23}, 
	{name: "New User", hasCar: 23, password: "234", hasWife: true}
); //полная замена объекта

db.users.deleteMany({age: {$gte: 22}, age: {$lte: 38}});