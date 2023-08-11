const { DataTypes, Model } = require("sequelize");
const db = require("../../../db/connection");

class Role extends Model {
    // Otras propiedades del modelo

    // Método de ejemplo
    // obtenerDescripcion() {
    //     return `Rol: ${this.rol}, Descripción: ${this.descripcion}`;
    // }
}

Role.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            required: [true, 'El ROL es obligatorio'],
            unique: true // no permite duplicados "unico"
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: 'tipo character varying(50) - verificar que la descripcion no sera demaciado largo' //Verificacion de error : logitud de texto
        },
        state: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
    },
    {
        sequelize: db,
        modelName: "Role",
        tableName: "role",
    }
);

module.exports = Role;
