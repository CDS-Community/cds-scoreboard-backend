const dbValidators = require('./db-validators');
const googleVerify = require('./google-verify');
const jwtGenerate = require('./jwt-generate');

module.exports = {
    ...dbValidators,
    ...googleVerify,
    ...jwtGenerate,
}