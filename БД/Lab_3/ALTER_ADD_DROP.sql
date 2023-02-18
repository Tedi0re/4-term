Use —_MyBase_Lab_3;

--ALTER Table «¿ ¿« ADD POL nchar(1) CONSTRAINT CK__«¿ ¿«__POL__5629CD9C check(POL in ('Ï','Ê'));

ALTER  Table «¿ ¿« DROP CONSTRAINT CK__«¿ ¿«__POL__5629CD9C ;
ALTER Table «¿ ¿« DROP COLUMN POL;

GO