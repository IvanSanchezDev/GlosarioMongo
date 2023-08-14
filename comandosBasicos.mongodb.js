

//Crear o usar una base de datos ya existente
use('prueba')
// Inserción de datos (No es necesario que exista la coleccion, si no existe la crea automaticamente)
db.usuarios.insertOne({nombre:"David", apellidos:"Castro", edad: 30})

