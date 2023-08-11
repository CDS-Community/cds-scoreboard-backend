const Position = require("../models/position");

exports.gets = async (req, res) => {
    const obj = await Position.findAll();
    res.json({ obj });
};

exports.get = async (req, res) => {
    const { id } = req.params;
    const obj = await Position.findByPk(id);
    if (obj) {
        res.json({ obj });
    } else {
        res.status(404).json({
            msg: `No existe un Position con el id : ${id}`
        });
    }
};

exports.post = async (req, res) => {
    const { body } = req;
    try {
        const obj = new Position(body);
        await obj.save();
        res.json({
            msg: 'El Position se creo correctamente',
            obj
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
};

exports.put = async (req, res) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const obj = await Position.findByPk(id);
        if (!obj) {
            return res.status(404).json({
                mensaje: `No existen el Position con ese ID`,
            });
        }
        await obj.update(body);
        res.json({
            msg: `El Position con el id ${id} fue actualizado correctamente`,
            obj
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
        console.log(error);
    }
};

exports.delet = async (req, res) => {
    const { id } = req.params;
    const obj = await Position.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg: 'No existe el Position con el id: ' + id
        });
    }
    await obj.destroy();
    res.json({
        msg: `El Position con el id ${id} fue eliminado permanentemente con exito..!!!`,
        obj
    });
};

exports.deletState = async (req, res) => {
    const { id } = req.params;
    const obj = await Position.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg: 'No existe el Position con el id : ' + id
        });
    }
    await obj.update({ state: false });
    res.json({
        msg: `El Position con el id ${id} fue eliminado con exito..!!!`,
        obj
    });
};
