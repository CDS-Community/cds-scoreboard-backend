const { DataTypes, Model } = require("sequelize");
const db = require("../../../db/connection");
const Level = require("./level")
const User = require("./user")

class LevelDetail extends Model {

    // Otras propiedades del modelo

    // Definición de las asociaciones
    // User
    static associate() {
        LevelDetail.belongsTo(User, { foreignKey: "user_id" });
    }
    //Position
    static associate() {
        LevelDetail.belongsTo(Level, { foreignKey: "level_id" });
    }

}

LevelDetail.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATE
        },
        level_score: {
            type: DataTypes.NUMBER
        },
        state: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            }
        },
        level_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Level,
                key: 'id'
            }
        },
    },
    {
        sequelize: db,
        modelName: "LevelDetail",
        tableName: "level_detail",
    }
);

module.exports = LevelDetail;
