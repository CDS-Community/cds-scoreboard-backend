
const validarCampos = require('./validar-campos');
const validarJWT = require('./validar-jwt');
const validarRole = require('./validar-rol');

module.exports = {
    ...validarCampos,
    ...validarJWT,
    ...validarRole,
}

