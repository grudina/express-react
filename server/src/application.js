import express from 'express'
import multer from 'multer'
import bodyParser from 'body-parser'
import path from 'path'
import config from './config/index'

export const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(multer().fields());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    console.log(req.url)
   if(req.url.indexOf('/api') !== -1) {
       next()
   } else {
       res.sendFile(path.join(__dirname, '../../public/index.html'))
   }
});



app.use((req, res, next) => {
    res.json({ok: false, message: "Not Found"})
});

app.listen(config.port, () => {
    
})