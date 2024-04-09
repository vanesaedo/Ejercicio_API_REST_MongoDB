const express = require('express')
const cowsay = require('cowsay')
const app = express()
const port = 3000

// Middlewares
const error404 = require('./middlewares/error404');
const morgan = require('./middlewares/morgan');

// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

// Rutas
const productsApiRoutes = require("./routes/productsApi.routes")
const productsRoutes = require("./routes/products.routes")
// const entriesApiRoutes = require("./routes/entriesApi.routes")

app.use(express.json()); // Habilito recepción de JSON en servidor

// Rutas
//API
app.use('/api/products',productsApiRoutes);

//WEB
app.use('/products',productsRoutes);

// Para rutas no existentes
app.use('*',error404);

app.listen(port, () => {
  console.log(
      cowsay.say({
          text: `Nos vamos a por tortilla. Funcionando en: http://localhost:${port}`,
          e: "oO",
          T: "U "
      }))
})

// Rutas poviders

//[GET] http://localhost:3000/api/providers Retorna un objeto con los datos de todos los providers. Retorna un status 200.
//[POST] http://localhost:3000/api/providers Se envía en el body los datos del proveedor a crear y retorna un status 201. Payload {message: "proveedor creado", provider:{datos_del_proveedor_creado}}.
//[PUT] http://localhost:3000/api/providers Se envía en el body los datos del proveedor a editar y retorna un status 200. Payload {message: "proveedor actualizado: Adidas", provider:{datos_del_proveedor_editado}}.
//[DELETE] http://localhost:3000/api/providers Se envía en el body el título del proveedor a borrar y retorna un status 200. Payload {message: "Se ha borrado el proveedor: Nintendo"}.
