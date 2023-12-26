/*MYSQL*/
CREATE TABLE
    wp_bussines (
        id INT NOT NULL AUTO_INCREMENT,
        name_person VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        name_company VARCHAR(50) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        euro VARCHAR(50) NOT NULL,
        PRIMARY KEY (id)
    )

/* POSTGRESQL*/

CREATE TABLE
    wp_bussines (
        id SERIAL PRIMARY KEY,
        name_person VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        name_company VARCHAR(50) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        euro VARCHAR(50) NOT NULL
    );