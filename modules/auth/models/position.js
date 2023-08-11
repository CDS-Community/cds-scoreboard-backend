const { DataTypes, Model } = require("sequelize");
const db = require("../../../db/connection");

class Position extends Model {

    // Otras propiedades del modelo

}

Position.init(
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
            type: DataTypes.STRING,
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
        modelName: "Position",
        tableName: "position",
    }
);

module.exports = Position;
