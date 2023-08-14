# MongoDB



### ¿Que es?

MongoDB  es un sistema de base de datos **multiplataforma** orientado a **documentos**, una de sus principales características es que nos  permite guardar nuestras estructuras o documentos en formato BSON (una  especificación similar a JSON)

MongoDB es de es esquema libre,  lo que permite que los documentos tengan estructuras  diferentes sin afectar su funcionamiento, algo que no podemos hacer con  las tablas de las bases de datos relacionales.



### Caracteristicas:

- Cada registro se denomina documento.
- Los documentos se pueden agrupar en colecciones (como las
- tablas en una BD relacional, pero almacenando documentos
- muy diferentes, sin esquema fijo).
- Se pueden crear  ındices para atributos, manteniendo estructura interna eficiente para el acceso a los mismos.
- Destaca por su velocidad y su rico pero sencillo sistema de consulta de los contenidos de la base de datos.
- Buen equilibrio entre rendimiento y funcionalidad



### Tipos de datos

- **Strings:** Nos sirven para guardar textos.
- **Boolean:** Información cierta o falsa (true o false)
- **ObjectId:** Utilizan el tiempo exacto en el que generamos la consulta para siempre  generan IDs únicos. Existen en BSON pero no en JSON.
- **Date:** Nos sirven para guardar fechas y hacer operaciones de rangos entre ellas.
- **Números:** Doubles, Integers, Integers 64 bits y Decimals.
- **Documentos Embebidos:** Documentos dentro de otros documentos ( {} )
- **Arrays:** Arreglos o listas de cualquier otro tipo de datos, incluso, de otras listas.



## Operadores en MongoDB

### De comparación

- $eq: Igual que =
- $gt: Mayor que >
- $gte: Mayor e igual que >=
- $lt: Menor que<
- $lte: Menor e igual que <=
- $ne: Diferente !=
- $in: Valores dentro de un rango
- $nin: Valores que no están dentro de un rango

### Lógicos

- $and: Une queries con un AND lógico
- $not: Invierte el efecto de un query
- $nor: Une queries con un NOR lógico
- $or: Une queries con un OR lógico

### Por elemento

- $type: Documentos que cuentan con un campo de un tipo especifico
- $exist: Documentos que cuentan con un campo especifico

### Para arreglos

- $all: Arreglos que contengan todos los elementos del query
- $elemMatch: Documentos que cumplen la condición del $elemMatch en uno de sus elementos
- $size: Documentos que contienen un campo tipo arreglo de un tamaño especifico.