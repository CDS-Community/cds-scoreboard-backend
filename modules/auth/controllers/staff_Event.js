const StaffEvent = require('../models/staff_event');

exports.getStaffEvents = async (req, res) => {
    try {
        const staffEvents = await StaffEvent.findAll();
        res.json({ staffEvents });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al obtener los eventos de personal" });
    }
};

exports.getStaffEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const staffEvent = await StaffEvent.findByPk(id);
        if (staffEvent) {
            res.json({ staffEvent });
        } else {
            res.status(404).json({ msg: `Evento de personal con ID ${id} no encontrado` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al obtener el evento de personal" });
    }
};

exports.createStaffEvent = async (req, res) => {
    const { body } = req;
    try {
        const staffEvent = await StaffEvent.create(body);
        res.status(201).json({ msg: "Evento de personal creado exitosamente", staffEvent });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al crear el evento de personal" });
    }
};

exports.updateStaffEvent = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
        const staffEvent = await StaffEvent.findByPk(id);
        if (staffEvent) {
            await staffEvent.update(body);
            res.json({ msg: `Evento de personal con ID ${id} actualizado exitosamente`, staffEvent });
        } else {
            res.status(404).json({ msg: `Evento de personal con ID ${id} no encontrado` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al actualizar el evento de personal" });
    }
};

exports.deleteStaffEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const staffEvent = await StaffEvent.findByPk(id);
        if (staffEvent) {
            await staffEvent.destroy();
            res.json({ msg: `Evento de personal con ID ${id} eliminado exitosamente` });
        } else {
            res.status(404).json({ msg: `Evento de personal con ID ${id} no encontrado` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al eliminar el evento de personal" });
    }
};
