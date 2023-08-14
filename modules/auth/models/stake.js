const { DataTypes, Model } = require("sequelize");
const db = require("../../../db/connection");
const Assistance = require("./assitance");
const LevelDetail = require("./level_detail");

class Stake extends Model {
    
}

Stake.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        score: {
            type: DataTypes.INTEGER,
        },
        description: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        assistences_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Assistance,
                key: "id",
            },
        },
        level_detail_id: {
            type: DataTypes.INTEGER,
            references: {
                model: LevelDetail,
                key: "id",
            },
        },
    },
    {
        sequelize: db,
        modelName: "Stake",
        tableName: "stake",
    }
);

module.exports = Stake;
