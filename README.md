###Api modulo 8 (actualizado desde modulo 7)

Realizar las siguientes consultas:

==> rutas publicas (todas las demas necesitan autenticacion)
      http://localhost:3000/api/v1/users/signup (POST)
      http://localhost:3000/api/v1/users/login (GET)

pueden autenticarse los 4 usuarios detallados en el documento con su correo y contrasena

al hacer log in se entrega el token JWT para agrearse en el authorization bearer del header de cada consulta, se agrega api.rest para hacer uso en pluggin api rest de VSCode a modo de ejemplo


Rutas usuarios

http://localhost:3000/api/v1/users/  => lista todos los usurios (GET)
http://localhost:3000/api/v1/users/all  => lista todos los usurios con sus bootcamps (GET)
http://localhost:3000/api/v1/users/update/:id  => actualiza usuario por id (PUT)
http://localhost:3000/api/v1/users/delete/:id  => elimina usuario por id (DELETE)

http://localhost:3000/api/v1/bootcamps/  => lista todos los bootcamps (GET)
http://localhost:3000/api/v1/bootcamps/all  => lista todos los bootcamps con sus usuarios (GET)
http://localhost:3000/api/v1/bootcamps/:id  => lista todos los bootcamps por id (GET)
http://localhost:3000/api/v1/bootcamps/add  => agrega un bootcamp (POST)
http://localhost:3000/api/v1/bootcamps/:bootcamp_id/add/:id  => agrega un usuario (id) a un bootcamp por id (POST)








