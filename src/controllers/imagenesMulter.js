

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    let a = Math.round(Math.random() * 1E5)

    const now = new Date()
    const anno = now.getFullYear()
    const mes = now.getMonth() + 1
    const dia = now.getDate()
    const horas = now.getHours()
    const minutos = now.getMinutes()
    const segundos = now.getSeconds()

    const fecha = anno + "-" + mes + "-" + dia + "_" + horas + "-" + minutos + "-" + segundos
    cb(null, "user_inmueble" + "_" + fecha + "_" + a + path.extname(file.originalname))
  }
});

const fileFilter = function (req, file, cb) {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Solo se permiten archivos JPG y PNG'));
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter, limits: { fileSize: 3 * 1024 * 1024 } });

module.exports = upload

