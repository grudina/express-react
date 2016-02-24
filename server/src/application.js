import express from 'express'
import multer from 'multer'
import bodyParser from 'body-parser'
import path from 'path'
import config from './config/index'
import appRoutes from './../../routes/index'

export const app = express();
// var router = app.Router();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(multer().fields());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    var result = req.query;
    // console.log(result);
    // console.log(req.url);
    // console.log(req.url.indexOf('/api') !== -1);
   if(req.url.indexOf('/api') !== -1) {
       next()
   } else {
       res.sendFile(path.join(__dirname, '../../public/index.html'))
   }
});


// app.use((req, res, next) => {
//     res.json({ok: false, message: "Access Denied", code: 403})
// });

app.use('/api/application', appRoutes);

app.listen(config.port, () => {
    
});
// {
//     ok: false,
//         message: "Access Denied",
//     code: 403
// }