

const { body, validationResult } = require('express-validator');



const validarUsuarios = (req, res, next) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => {
      if (error.path == "email") {   
        return { "msg": error.msg }
      }
      if (error.path == "contrasena") {
        return { "msg2": error.msg } 
      }
    });
    return res.status(400).json({ errors: errorMessages });
  } else {
    next(); 
  }
}

const middlewareValidator = [
  body('email').trim()
    .isLength({ min: 6 }).withMessage('El nombre debe tener mas de 6 caracteres').isLength({ max: 32 }).withMessage('El nombre debe tener menos de 32 caracteres'),
  body('contrasena').trim()  
    .isLength({ min: 6 }).withMessage('El nombre debe tener mas de 6 caracteres')
    .isLength({ max: 32 }).withMessage('El nombre debe tener menos de 32 caracteres'),
  validarUsuarios, 
];

module.exports = middlewareValidator
