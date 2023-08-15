const Commission = require("../models/commission");

exports.getCommissions = async (req, res) => {
    try {
        const commissions = await Commission.findAll();
        res.json({ commissions });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al obtener las comisiones" });
    }
};

exports.getCommission = async (req, res) => {
    const { id } = req.params;
    try {
        const commission = await Commission.findByPk(id);
        if (commission) {
            res.json({ commission });
        } else {
            res.status(404).json({ msg: `Comisión con ID ${id} no encontrada` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al obtener la comisión" });
    }
};

exports.createCommission = async (req, res) => {
    const { body } = req;
    try {
        const commission = await Commission.create(body);
        res.status(201).json({ msg: "Comisión creada exitosamente", commission });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al crear la comisión" });
    }
};

exports.updateCommission = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
        const commission = await Commission.findByPk(id);
        if (commission) {
            await commission.update(body);
            res.json({ msg: `Comisión con ID ${id} actualizada exitosamente`, commission });
        } else {
            res.status(404).json({ msg: `Comisión con ID ${id} no encontrada` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al actualizar la comisión" });
    }
};

exports.deleteCommission = async (req, res) => {
    const { id } = req.params;
    try {
        const commission = await Commission.findByPk(id);
        if (commission) {
            await commission.destroy();
            res.json({ msg: `Comisión con ID ${id} eliminada permanentemente` });
        } else {
            res.status(404).json({ msg: `Comisión con ID ${id} no encontrada` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al eliminar la comisión" });
    }
};

exports.deleteCommissionByState = async (req, res) => {
    const { id } = req.params;
    try {
        const commission = await Commission.findByPk(id);
        if (commission) {
            await commission.update({ state: false });
            res.json({ msg: `Comisión con ID ${id} desactivada` });
        } else {
            res.status(404).json({ msg: `Comisión con ID ${id} no encontrada` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al desactivar la comisión" });
    }
};
