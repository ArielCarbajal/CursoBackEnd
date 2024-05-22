import inquirer from "inquirer";

// const pregunta = [
  // {
  //   type: "input",
  //   name: "nombre",
  //   message: "digame su nombre",
  // },
//   {
//     type: "confirm",
//     name: "confirmacion",
//     message: "está seguro del name ? ",
//   },
//   {
//     type: "list",
//     name: "colores",
//     message: "cual es tu color fav  ? ",
//     choices: ["Morado", "Rojo", "Verde", "Azul"],
//   },
//   {
//     type: "checkbox",
//     name: "intereses",
//     message: "Seleeciona la opcion de interes ",
//     choices: ["Programacion", "Diseño", "Bases de Datos", "Redes"],
//   },
  // {
  //   type: "password",
  //   name: "contraseña",
  //   message: "Ingrese su conntraseña: ",
  //   mask: "*",
  // },
// ];

// inquirer.prompt(pregunta).then((respuesta) => {
//   if (respuesta.confirmacion) {
//     console.log("confirmacion exitosa");
//     console.log(`Hola ${respuesta.nombre}`);
//     console.log(`Tu color favorito es ${respuesta.colores}`);
//     console.log(`Tus intereses son: ${respuesta.intereses.join(",")}`);
    // console.log(`tu password es ${respuesta.contraseña}`);
//   } else {
//     console.log("confirmacion fallo");
//   }
// });

// const preguntaFrutas = [
//   {
//     type: "checkbox",
//     name: "frutas",
//     message: "Seleccione las combinacion de su licuado: ",
//     choices: ["Manzana y banana.", "Manzana y naranja", "Banana y naranja"]
//   }
// ]

// inquirer.prompt(preguntaFrutas).then((frutas)={
//   if()
// })

// const pregunta = [
//   {
//     type: 'input',
//     name: 'correo',
//     message: 'Introduce tu correo: ',
//     validate: function (value) {
//       const validacion = value.match(
//         /^[a-zA-Z0-9_.+_]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-. ]+$/
//       )
//       if(validacion){
//         return true
//       }
//       return 'Porfavor introduce un correo valido'
//       }
//   }
// ]

// inquirer.prompt(pregunta)
//   .then((respuesta)=>{
//     console.log(`Correo ingresado: ${respuesta.correo}`)
//   })
//   .catch((error)=>{
//     console.error('Error al ingresar el correo', error)
//   })

const pregunta = [
  {
    type: "input",
    name: "nombre",
    message: "Ingrese su nombre: ",
  },
  {
    type: 'input',
    name: 'edad',
    message: 'Ingrese su edad: ',
    validate: function (value) {
    if(value >= 18){
      return true
    }
    return 'Su edad no cumple con los requisitos minimos'
  }
  },
  {
    type: 'input',
    name: 'correo',
    message: 'Ingrese su correo: ',
    validate: function (value) {
      const validacion = value.match(
        /^[a-zA-Z0-9_.+_]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-. ]+$/
      )
      if(validacion){
        return true
      }
      return 'Porfavor introduce un correo valido'
      }
  },
  {
    type: "password",
    name: "contraseña",
    message: "Ingrese su contraseña: ",
    mask: "*",
  },
  {
    type: "input",
    name: "correoLogin",
    message: "Ingrese su correo para iniciar sesion: ",
    validate: function (value) {
      const validacion = value.match(
        /^[a-zA-Z0-9_.+_]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-. ]+$/
      )
      if(validacion){
        return true
      }
      return 'Porfavor introduce un correo valido'
      }
  },
  {
    type: "password",
    name: "contraseñaLogin",
    message: "Ingrese su contraseña para iniciar sesion: ",
    mask: "*",
  },
]

inquirer.prompt(pregunta)
.then((respuesta)=>{
  if(respuesta.contraseña === respuesta.contraseñaLogin && respuesta.correo === respuesta.correoLogin){
    console.log(`Bienvenido ${respuesta.nombre}`)
  }else{
    console.log('Correo o contraseña invalido, revise sus credenciales')
  }
})
.catch((error)=>{
  console.error('Error al ingresar el correo', error)
})