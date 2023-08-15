const LevelDetail = require("../models/level_detail");

exports.gets = async (req, res) => {
    const obj = await LevelDetail.findAll();
    res.json({ obj });
};

exports.get = async (req, res) => {
    const { id } = req.params;
    const obj = await LevelDetail.findByPk(id);
    if (obj) {
        res.json({ obj });
    } else {
        res.status(404).json({
            msg: `No existe un LevelDetail con el id : ${id}`
        });
    }
};

exports.post = async (req, res) => {
    const { body } = req;
    try {
        const obj = new LevelDetail(body);
        await obj.save();
        res.json({
            msg: 'El LevelDetail se creo correctamente',
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
        const obj = await LevelDetail.findByPk(id);
        if (!obj) {
            return res.status(404).json({
                mensaje: `No existen el LevelDetail con ese ID`,
            });
        }
        await obj.update(body);
        res.json({
            msg: `El LevelDetail con el id ${id} fue actualizado correctamente`,
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
    const obj = await LevelDetail.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg: 'No existe el LevelDetail con el id: ' + id
        });
    }
    await obj.destroy();
    res.json({
        msg: `El LevelDetail con el id ${id} fue eliminado permanentemente con exito..!!!`,
        obj
    });
};

exports.deletState = async (req, res) => {
    const { id } = req.params;
    const obj = await LevelDetail.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg: 'No existe el LevelDetail con el id : ' + id
        });
    }
    await obj.update({ state: false });
    res.json({
        msg: `El LevelDetail con el id ${id} fue eliminado con exito..!!!`,
        obj
    });
};
