const Assistance = require('../models/assitance');

exports.getAssistances = async (req, res) => {
    try {
        const assistances = await Assistance.findAll();
        res.json({ assistances });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al obtener las asistencias" });
    }
};

exports.getAssistance = async (req, res) => {
    const { id } = req.params;
    try {
        const assistance = await Assistance.findByPk(id);
        if (assistance) {
            res.json({ assistance });
        } else {
            res.status(404).json({ msg: `No existe una asistencia con el id: ${id}` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al obtener la asistencia" });
    }
};

exports.createAssistance = async (req, res) => {
    const { body } = req;
    try {
        const assistance = await Assistance.create(body);
        res.json({
            msg: "Asistencia creada correctamente",
            assistance
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al crear la asistencia" });
    }
};

exports.updateAssistance = async (req, res) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const assistance = await Assistance.findByPk(id);
        if (!assistance) {
            return res.status(404).json({
                msg: `No existe una asistencia con el id: ${id}`
            });
        }
        await assistance.update(body);
        res.json({
            msg: `Asistencia actualizada correctamente`,
            assistance
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al actualizar la asistencia" });
    }
};

exports.deleteAssistance = async (req, res) => {
    const { id } = req.params;
    try {
        const assistance = await Assistance.findByPk(id);
        if (!assistance) {
            return res.status(404).json({
                msg: `No existe una asistencia con el id: ${id}`
            });
        }
        await assistance.destroy();
        res.json({
            msg: `Asistencia eliminada con éxito`,
            assistance
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al eliminar la asistencia" });
    }
};
