Use �_MyBase_Lab_3;


CREATE table �������
(
	���� real,
	[��� �������] nvarchar(50),
	id int primary key, 
	[���� �� ������] real
);
CREATE table ��������
(
	[�������� �����] nvarchar(50) primary key, 
	[���������� ��������] int,
	[���������� ����] nvarchar(50),
	������� int
	
);

CREATE table ��������
(
	[�������� ��������] nvarchar(50) primary key, 
	������� int,
	���� date
);

CREATE table �����
(
	[������������ � �������] real,
	�������� nvarchar(50) foreign key references
							��������([�������� �����]),
	�������� nvarchar(50) foreign key references
							��������([�������� ��������]),
	[����� ������] int primary key foreign key references
							�������(id),
);