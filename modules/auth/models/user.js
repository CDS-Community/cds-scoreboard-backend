const { DataTypes, Model } = require("sequelize");
const db = require("../../../db/connection");
const Role = require("./role")
const Position = require("./position")

class User extends Model {

    // Otras propiedades del modelo

    // Definición de las asociaciones
    // User
    static associate() {
        User.belongsTo(Role, { foreignKey: "role_id" });
    }
    //Position
    static associate() {
        User.belongsTo(Position, { foreignKey: "position_id" });
    }

}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            required: [true, 'El correo es obligatorio'],
            unique: true // no permite duplicados "unico"

        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthdate: {
            type: DataTypes.DATE
        },
        date_of_register: {
            type: DataTypes.DATE,
            allowNull: false
        },
        number: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        staff_state: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: null
        },
        state: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        role_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Role,
                key: 'id'
            }
        },
        position_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Position,
                key: 'id'
            }
        },
    },
    {
        sequelize: db,
        modelName: "User",
        tableName: "user",
    }
);

module.exports = User;
