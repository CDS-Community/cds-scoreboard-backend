const { DataTypes, Model } = require("sequelize");
const db = require("../../../db/connection");

class Commission extends Model {
    
}

Commission.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        state_action: {
            type: DataTypes.STRING(4),
        },
        state: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    },
    {
        sequelize: db,
        modelName: "Commission",
        tableName: "commission",
    }
);

module.exports = Commission;