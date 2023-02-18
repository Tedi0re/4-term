Use С_MyBase_Lab_3;


CREATE table РЕКЛАМА
(
	Цена real,
	[Вид рекламы] nvarchar(50),
	id int primary key, 
	[Цена за минуту] real
);
CREATE table ЗАКАЗЧИК
(
	[Название фирмы] nvarchar(50) primary key, 
	[Банковский реквизит] int,
	[Контактное лицо] nvarchar(50),
	Телефон int
	
);

CREATE table ПЕРЕДАЧА
(
	[Название Передачи] nvarchar(50) primary key, 
	Рейтинг int,
	Дата date
);

CREATE table ЗАКАЗ
(
	[Длительность в минутах] real,
	Заказчик nvarchar(50) foreign key references
							ЗАКАЗЧИК([Название фирмы]),
	Передача nvarchar(50) foreign key references
							ПЕРЕДАЧА([Название передачи]),
	[Номер заказа] int primary key foreign key references
							РЕКЛАМА(id),
);