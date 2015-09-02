
/*:: Inicio Script de Base de datos ::*/



CREATE TABLE IF NOT EXISTS  usuario  (
    id  int(11) PRIMARY KEY  AUTO_INCREMENT NOT NULL,
    nombres  varchar(250) NOT NULL,
    apellidos  varchar(250) NOT NULL,
    email  varchar(250) NOT NULL,
    genero  varchar(1) NOT NULL,
    nacimiento  date  NOT NULL,
    registro  varchar(250) NOT NULL,
    usuario  varchar(250) NOT NULL,
    clave  varchar(250) NOT NULL,
    borrado  int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;












/*:: Fin Script de Base de datos ::*/

