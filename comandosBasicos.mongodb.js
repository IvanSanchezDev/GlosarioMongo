

//Crear o usar una base de datos ya existente
use('prueba')
// Inserción de datos (No es necesario que exista la coleccion, si no existe la crea automaticamente)
db.usuarios.insertOne({nombre:"Ivan", apellidos:"Sanchez", edad: 40})


//CONSULTAS SIMPLES 

//Muestra los primeros 20 documentos de la colección
use('prueba')
db.usuarios.find()
// La función pretty ayuda a tener una respuesta más agradable para leer
use('prueba')
db.usuarios.find().pretty()

//find, skip, limit, sort

/*Si tenemos una consulta que retorna 100 documentos pero solamente necesitamos los documentos del número 20 al 30, la manera de hacerlo es usando skip() y limit()*/

//Si tenemos 100 usuarios y solamente queremos los primeros 10 podemos ejecutar,
use('prueba')
db.usuarios.find({}).limit(10)

//Ahora si queremos los usuarios  ubicados en los indices 40 y 50 lo que debemos hacer es
use('prueba')
db.collection.find({}).skip(40).limit(10)

//Supongamos que queremos ordenar los usuarios por edad, de mayor a menor.
use('prueba')
db.usuarios.find({}).sort({'edad':-1})

//ACTUALIZAR REGISTROS, en este caso buscara el registro donde el nombre del usuario sea "Ivan" y actualizara los datos que estan en el set
use('prueba')
db.usuarios.updateOne(
   { nombre: "Ivan" },
   {
     $set: { nombre: "Camilo", edad:  35},
   })

//Actualizar varios registros, en este caso se actualizaran los usuarios que tengan la edad menor que 33 años
use('prueba')
   db.usuarios.updateMany(
      { edad: { $lt: 33 } },
      {
        $set: { edad: 0}
      }
   )

//borrar muchos documentos de acuerdo a un filtro
   db.usuarios.deleteMany({ edad: 30 })
   // Borrar un documento
   db.usuarios.deleteOne( { nombre : "David" } )
   // Borrar todos los documentos de una base datos
   db.usuarios.deleteMany({})