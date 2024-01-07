const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const { Pool } = require('pg');
dotenv.config();

/* Database */
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})
const PORT = 3000;

// SERVIDOR
const app = express();

// habilitar body-parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

//Habiliar los cors
app.use(cors(corsOptions));

//Escucha
app.listen(PORT, () => {
  console.log('Running server on port', PORT)
});

// Rutas del app

//Obtener registros de bussines
app.get('/wpdb/v1/get/bussines/', (req, res) => {
  const sql = 'SELECT * FROM wp_bussines';
  pool.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error en la consulta", error: err });
    }
    return res.json(result.rows);
  });
});

// Crear registro de nuevos negocios
app.post('/wpdb/v1/register/bussines/', (req, res) => {
  const { name_person, email, name_company, phone, euro, type_register } = req.body;
  pool.query(`INSERT INTO wp_bussines (name_person, email, name_company, phone, euro, type_register) VALUES ('${name_person}', '${email}', '${name_company}', '${phone}', '${euro}', '${type_register}');`, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error en el insertado", error: err });
    }
    return res.json({ message: "Negocio registrado correctamente" });
  });
});

app.delete('/wpdb/v1/delete/bussines/:id', (req, res) => {
  const { id } = req.params;
  pool.query(`DELETE FROM wp_bussines WHERE id = ${id}`, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error en el borrado", error: err });
    }
    return res.json({ message: "Negocio eliminado correctamente" });
  });
})



