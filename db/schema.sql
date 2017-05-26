
USE sv620102zo5ablby;

CREATE TABLE Burgers
(
	id int AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL ,
	devoured BOOLEAN,
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP,
	PRIMARY KEY (id)
);