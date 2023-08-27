const jwt = require('jsonwebtoken');
const { User } = require('../modules/auth/models');

const validarJWT = async (req, res, next) => {
    const token = req.header('token');
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición',
        });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.SECRETORPRIVATEKEY || '');
        if (!decodedToken) {
            throw new Error();
        }
        // decodificar token para obtener el id == uid
        const { uid } = decodedToken;
        // Leer el usuario que corresponde al uid
        const user = await User.findByPk(uid); 

        if (!user) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe en la DB',
            });
        }

        // Verificar si el usuario tiene estado falso
        if (!user.state) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false',
            });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido',
        });
    }
};

module.exports = {
    validarJWT
};
