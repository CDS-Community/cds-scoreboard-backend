const { DataTypes, Model } = require("sequelize");
const db = require("../../../db/connection");
const Event = require("./event");

class ImgEvent extends Model {
    
}

ImgEvent.init(
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
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
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
        modelName: "ImgEvent",
        tableName: "img_event",
    }
);

module.exports = ImgEvent;
