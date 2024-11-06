


const { body, validationResult } = require('express-validator');

const validarUsuarios = (req, res, next) => {

  const { usuario, email, password, passwordComprobacion } = req.body.registro;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => {
      if (error.path == "registro.usuario") {
        return { "msg": error.msg }
      }
      if (error.path == "registro.email") {
        return { "msg2": error.msg }
      }
      if (error.path == "registro.password") {
        return { "msg3": error.msg }
      }
      if (error.path == "registro.passwordComprobacion") {
        return { "msg4": error.msg }
      }
    });
    return res.status(400).json({ errors: errorMessages });
  } else {
    if (passwordComprobacion !== password) {
      return res.status(400).json({ mensajes: "Contraseña no coincidentes" });
    }

    if (passwordComprobacion === password) {
      console.log("No hay errores de validación");
      next();
    }
  }
}

const middlewareValidatorRegistro = [
  body('registro.usuario').trim()
    .isLength({ min: 6 }).withMessage('El nombre debe tener mas de 6 caracteres').isLength({ max: 20 }).withMessage('El nombre debe tener menos de 20 caracteres'),
  body('registro.email').trim()
    .isLength({ min: 6 }).withMessage('El nombre debe tener mas de 6 caracteres')
    .isLength({ max: 32 }).withMessage('El nombre debe tener menos de 32 caracteres')
    .isEmail().withMessage('No es un correo válido'),
  body('registro.password').trim()
    .isLength({ min: 6 }).withMessage('El nombre debe tener mas de 6 caracteres')
    .isLength({ max: 32 }).withMessage('El nombre debe tener menos de 32 caracteres')
    .isAlphanumeric().withMessage('Solo debe haber letras y numeros'),
  body('registro.passwordComprobacion').trim()
    .isLength({ min: 6 }).withMessage('El nombre debe tener mas de 6 caracteres')
    .isLength({ max: 32 }).withMessage('El nombre debe tener menos de 32 caracteres')
    .isAlphanumeric().withMessage('Solo debe haber letras y numeros'),
  validarUsuarios,
];

module.exports = middlewareValidatorRegistro
