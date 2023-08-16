const Event = require("../models/event");

exports.getEvents = async (req, res) => {
    try {
        const events = await Event.findAll();
        res.json({ events });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al obtener los eventos" });
    }
};

exports.getEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const event = await Event.findByPk(id);
        if (event) {
            res.json({ event });
        } else {
            res.status(404).json({ msg: `No existe un evento con el id: ${id}` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al obtener el evento" });
    }
};

exports.createEvent = async (req, res) => {
    const { body } = req;
    try {
        const event = await Event.create(body);
        res.json({
            msg: "Evento creado correctamente", event
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al crear el evento" });
    }
};

exports.updateEvent = async (req, res) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const event = await Event.findByPk(id);
        if (!event) {
            return res.status(404).json({
                msg: `No existe un evento con el id: ${id}`
            });
        }
        await event.update(body);
        res.json({
            msg: `Evento actualizado correctamente`, event
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al actualizar el evento" });
    }
};

exports.deleteEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const event = await Event.findByPk(id);
        if (!event) {
            return res.status(404).json({
                msg: `No existe un evento con el id: ${id}`
            });
        }
        await event.destroy();
        res.json({
            msg: `Evento eliminado con éxito`, event
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al eliminar el evento" });
    }
};

//eliminacion por estado

exports.deleteEventByState = async (req, res) => {
    const { id } = req.params;
    try {
        const event = await Event.findByPk(id);
        if (!event) {
            return res.status(404).json({
                msg: `No existe un evento con el id: ${id}`
            });
        }
        await event.update({ state: false });
        res.json({
            msg: `Evento eliminado por estado con éxito`, event
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al eliminar el evento por estado" });
    }
};

