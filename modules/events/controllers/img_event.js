const ImgEvent = require("../models/img_event");

exports.getImgEvents = async (req, res) => {
    try {
        const imgEvents = await ImgEvent.findAll();
        res.json({ imgEvents });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al obtener las imágenes de eventos" });
    }
};

exports.getImgEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const imgEvent = await ImgEvent.findByPk(id);
        if (imgEvent) {
            res.json({ imgEvent });
        } else {
            res.status(404).json({ msg: `Imagen de evento con ID ${id} no encontrada` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al obtener la imagen de evento" });
    }
};

exports.createImgEvent = async (req, res) => {
    const { body } = req;
    try {
        const imgEvent = await ImgEvent.create(body);
        res.status(201).json({ msg: "Imagen de evento creada exitosamente", imgEvent });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al crear la imagen de evento" });
    }
};

exports.updateImgEvent = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
        const imgEvent = await ImgEvent.findByPk(id);
        if (imgEvent) {
            await imgEvent.update(body);
            res.json({ msg: `Imagen de evento con ID ${id} actualizada exitosamente`, imgEvent });
        } else {
            res.status(404).json({ msg: `Imagen de evento con ID ${id} no encontrada` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al actualizar la imagen de evento" });
    }
};

exports.deleteImgEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const imgEvent = await ImgEvent.findByPk(id);
        if (imgEvent) {
            await imgEvent.destroy();
            res.json({ msg: `Imagen de evento con ID ${id} eliminada exitosamente` });
        } else {
            res.status(404).json({ msg: `Imagen de evento con ID ${id} no encontrada` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al eliminar la imagen de evento" });
    }
};

