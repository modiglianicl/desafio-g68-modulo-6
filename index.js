// Librerias
import express from 'express';
import 'dotenv/config';
import router from './routes/router.js';
import path from 'path';

// Config
const __dirname = path.resolve()
const app = express();
const {PORT} = process.env;

// Middlewares
app.use(express.urlencoded({extended : true}))

// Archivos estaticos
app.use('/assets', express.static(__dirname + '/assets'));

// Rutas
app.use('/',router)


// Listen
app.listen(PORT,() => {
    console.log(`Server UP on http://localhost:${PORT}`);
})