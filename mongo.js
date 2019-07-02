//use itproger 
//создание БД

// db.createCollection("users") - создание коллекции

db.users.count({age: 43});
db.users.distinct("email"); //вывод массива с email без повторений
db.users.aggregate([
  {$match: {name: "Jack"}},
  {$group: {_id: "$name", age: {$sum: "$age"}}} //если поле $match пустое, то группируются все строки
]); //вывести сумму возраста у документов с именем Jack с группировкой по имени