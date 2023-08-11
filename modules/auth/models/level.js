const { DataTypes, Model } = require("sequelize");
const db = require("../../../db/connection");

class Level extends Model {

    // Otras propiedades del modelo

}

Level.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        state: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
    },
    {
        sequelize: db,
        modelName: "Level",
        tableName: "level",
    }
);

module.exports = Level;
