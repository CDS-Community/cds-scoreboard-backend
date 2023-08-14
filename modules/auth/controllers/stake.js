const Stake = require("../models/stake");

exports.getStakes = async (req, res) => {
    try {
        const stakes = await Stake.findAll();
        res.json({ stakes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al obtener las apuestas" });
    }
};

exports.getStake = async (req, res) => {
    const { id } = req.params;
    try {
        const stake = await Stake.findByPk(id);
        if (stake) {
            res.json({ stake });
        } else {
            res.status(404).json({ msg: `Apuesta con ID ${id} no encontrada` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al obtener la apuesta" });
    }
};

exports.createStake = async (req, res) => {
    const { body } = req;
    try {
        const stake = await Stake.create(body);
        res.status(201).json({ msg: "Apuesta creada exitosamente", stake });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al crear la apuesta" });
    }
};

exports.updateStake = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
        const stake = await Stake.findByPk(id);
        if (stake) {
            await stake.update(body);
            res.json({ msg: `Apuesta con ID ${id} actualizada exitosamente`, stake });
        } else {
            res.status(404).json({ msg: `Apuesta con ID ${id} no encontrada` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al actualizar la apuesta" });
    }
};

exports.deleteStake = async (req, res) => {
    const { id } = req.params;
    try {
        const stake = await Stake.findByPk(id);
        if (stake) {
            await stake.destroy();
            res.json({ msg: `Apuesta con ID ${id} eliminada exitosamente` });
        } else {
            res.status(404).json({ msg: `Apuesta con ID ${id} no encontrada` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al eliminar la apuesta" });
    }
};
