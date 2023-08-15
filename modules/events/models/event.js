const { DataTypes, Model } = require("sequelize");
const db = require("../../../db/connection");
const User = require("../../auth/models/user");

class Event extends Model {

}

Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
        },
        start_time: {
            type: DataTypes.TIME,
        },
        end_time: {
            type: DataTypes.TIME,
        },
        location: {
            type: DataTypes.STRING,
        },
        coordinates: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        organizer_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: "id",
            },
        },
    },
    {
        sequelize: db,
        modelName: "Event",
        tableName: "events",
    }
);

module.exports = Event;
