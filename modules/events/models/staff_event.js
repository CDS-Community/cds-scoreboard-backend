const { DataTypes, Model } = require("sequelize");
const db = require("../../../db/connection");
const User = require("../../auth/models/user");
const Event = require("./event");
const Commission = require("./commission");

class StaffEvent extends Model {

}

StaffEvent.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        start_time: {
            type: DataTypes.TIME,
        },
        end_time: {
            type: DataTypes.TIME,
        },
        description: {
            type: DataTypes.STRING,
        },
        score: {
            type: DataTypes.INTEGER,
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
        commission_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Commission,
                key: "id",
            },
        },
    },
    {
        sequelize: db,
        modelName: "StaffEvent",
        tableName: "staff_event",
    }
);

module.exports = StaffEvent;