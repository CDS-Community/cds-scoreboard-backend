
const bcryptjs = require('bcryptjs');

const User = require('../models/user');

// Gets Limit : Obtener varios usuarios - en este caso por defecto se optiene de a 5 usuarios y desde la posicion 0 en la bd
exports.getslimit = async (req, res) => {

    const { limit = 5, desde = 0 } = req.query;
    const query = { state: true };

    const [total, users] = await Promise.all([
        User.countDocuments(query),
        User.find(query)
            .skip(Number(desde))
            .limit(Number(limit))
    ]);
    res.json({
        total,
        users
    });
}

// Gets : Obtener varios usuarios
exports.gets = async (req, res) => {
    const obj = await User.findAll();
    res.json({ obj });
};

// Get : Obtener un usuario
exports.get = async (req, res) => {
    const { id } = req.params;
    const obj = await User.findByPk(id);
    if (obj) {
        res.json({ obj });
    } else {
        res.status(404).json({
            msg: `No existe un User con el id : ${id}`
        });
    }
};

// Put : Editar un usuario
exports.putpre = async (req, res) => {
    const { id } = req.params;
    const { password, email, ...resto } = req.body;
    // TODO validar contra base de Datos
    if (password) {
        // Encriptar la contraseña 
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }
    const user = await User.findByIdAndUpdate(id, resto);
    res.json(user);
}

// Put : Editar un usuario
exports.put = async (req, res) => {
    const { password, email, ...resto } = req.body;
    const { id } = req.params;
    // Encriptar la contraseña 
    if (password) {
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }
    try {
        const obj = await User.findByPk(id);
        if (!obj) {
            return res.status(404).json({
                mensaje: `No existen el User con ese ID`,
            });
        }
        await obj.findByIdAndUpdate(id, resto);
        res.json({
            msg: `El User con el id ${id} fue actualizado correctamente`,
            obj
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
        console.log(error);
    }
};

// Post : Crear usuario
exports.postpre = async (req, res) => {
    const { name, email, password, number, img, date_of_register, role_id, position_id } = req.body;
    const user = new User({ name, email, password, number, img, date_of_register, role_id, position_id });
    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);
    // Guardar en DB
    await user.save();
    res.json({
        user
    });
}

// Post : Crear usuario
exports.post = async (req, res) => {
    const { password, ...resto } = req.body;
    try {
        // Encriptar la contraseña 
        if (password) {
            const salt = bcryptjs.genSaltSync();
            resto.password = bcryptjs.hashSync(password, salt);
        }
        const obj = new User(resto);
        await obj.save();
        res.json({
            msg: 'El User se creo correctamente',
            obj
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
};

// Delet : Eliminar un usuario de forma permanente
exports.delet = async (req, res) => {
    const { id } = req.params;
    const obj = await User.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg: 'No existe el User con el id: ' + id
        });
    }
    await obj.destroy();
    res.json({
        msg: `El User con el id ${id} fue eliminado permanentemente con exito..!!!`,
        obj
    });
};

// Delet : pre { permanente y cambio de estado }
exports.deletpre = async (req, res = response) => {
    const { id } = req.params;
    // Borrado Fisicamente
    // const user = await User.findByIdAndDelete(id);
    // cambio de estado...
    const user = await User.findByIdAndUpdate(id, { state: false });
    //const userAutentication = req.user;
    res.json({
        user
    });
}

// Delet : Eliminar un usuario con el cambio de estado
exports.deletState = async (req, res) => {
    const { id } = req.params;
    const obj = await User.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg: 'No existe el User con el id : ' + id
        });
    }
    await obj.update({ state: false });
    res.json({
        msg: `El User con el id ${id} fue eliminado con exito..!!!`,
        obj
    });
};