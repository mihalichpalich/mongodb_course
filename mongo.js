// use itproger - создание БД
// db.createCollection("users") - создание коллекции

db.users.find();

db.users.find().limit(2);
db.users.find({}, {_id: 0}).limit(2); //во 2-ых {} указываем те свойства, кот. не хотим выводить

db.users.find({}, {_id: 0}).sort({age: 1}); // 1 - сортировка по возрастанию, -1 - по убыванию
db.users.find({}, {_id: 0}).sort({age: 1, email: 1});

db.users.find({age: 22}, {_id: 0}); // 1-е {} - фильтр
db.users.find({age: 21, email: "bob@test.ru"}, {_id: 0}); // 2 условия для 1 строки одновременно
db.users.find({$or: [{age: 21}, {email: "bob@test.ru"}]}, {_id: 0}); //условие "или" для нескольких строк
db.users.find({$or: [{age: {$lt: 38}}, {email: "bob@test.ru"}]}, {_id: 0}).sort({age: 1}); //$lt: 38 - меньше 38, $gt - больше, 
																						//gte - >=, lte - <=, eq - =, ne - не равно
db.users.find({name: {$in: ["Jack", "John", "Боб"]}}, {_id: 0}); //объекты с заданными значениями name, nin - без зад. значений
db.users.find({child: {$exists: true}}, {_id: 0}); //у кого сущ. объект child
db.users.find({favColors: {$size: 2}}, {_id: 0}); //у кого в массиве favColors 2 эл-та
db.users.find({"favColors.1": "Красный"}, {_id: 0}); //проверка 1-го эл-та в массиве favColors
db.users.find({favColors: {$elemMatch: {$lte: "a"}}}, {_id: 0}); //у кого эл-ты в массиве favColors больше какого-либо значения