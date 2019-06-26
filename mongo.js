db.users.insertOne(
	{
		"name":"John",
		"email":"test@mail.ru",
		"age":23,
		"hasCar":true,
		"favColors":["Зеленый", "Красный", "Черный"],
		"child":{"name":"Jack", "surname":"Charley", "age":5}
	}
);

db.users.insertOne(
	{
		_id: 2, //задаем свой id
		"name":"Jack",
		"email":"admin@mail.ru",
		"age":43,
		"hasCar":false,
		"favColors":["Красный", "Белый"],
		"child":{"name":"Jack", "surname":"Charley", "age":5}
	}
);

db.users.insertOne(
	{
		"name":"Jack",
		"email":"admin@mail.ru",
		"age":43,
		"hasCar":false,
		"favColors":["Красный", "Белый"],
		"pasword":"xdhcgh6854" //значение child - NULL
	}
);

db.users.insertOne(
	{
		"name":"George",
		"email":"admin@test.ru",
		"age":22,
		"hasCar":false,
		"birthday":new Date('1996-11-27')
	}
);

db.users.insertMany([
	{
		"name":"Боб",
		"email":"admin@test.ru",
		"age":22,
		"hasCar":false,
		"birthday":new Date('1996-11-27')
	},
	{
		"name":"Василий",
		"email":"vasya@test.ru",
		"age":22,
		"hasCar":false,
		"birthday":new Date('1996-11-27')
	}
]);