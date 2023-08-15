const { DataTypes, Model } = require("sequelize");
const db = require("../../../db/connection");
const User = require("../../auth/models/user");
const Event = require("./event");

class Assistance extends Model {

}

Assistance.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        description: {
            type: DataTypes.STRING,
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        state: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: "id",
            },
        },
        event_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Event,
                key: "id",
            },
        },
    },
    {
        sequelize: db,
        modelName: "Assistance",
        tableName: "assitances",
    }
);

module.exports = Assistance;