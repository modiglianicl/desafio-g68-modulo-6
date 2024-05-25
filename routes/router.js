import express from 'express';
import path from 'path';
import Jimp from 'jimp';
import { v4 as uuidv4 } from 'uuid';

const __dirname = path.resolve();
const router = express.Router();


router.get('/',(req,res) => {
    res.sendFile(__dirname + '/views/index.html');
})

router.post('/imagenbw',(req,res) => {
    let {urlimagen} = req.body;
    let id_nueva_imagen = uuidv4().slice(-6);
    console.log(urlimagen);
    Jimp.read(urlimagen)
        .then((imagen) => {
            let nueva_imagen = path.join(__dirname,`assets/img/imagen-${id_nueva_imagen}.jpeg`);
            return imagen
            .grayscale()
            .resize(350,350)
            .writeAsync(nueva_imagen)
            .then( ()=> nueva_imagen)
        })
        .then((nueva_imagen) => {
            console.log(nueva_imagen);
            res.sendFile(nueva_imagen);
        })
        .catch((error) => {
            console.log(error);
        });

})


export default router;