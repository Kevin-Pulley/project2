module.exports = function (sequelize, DataTypes) {
    let Class = sequelize.define("Class", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            }
        }
    });
    Class.associate = function (models) {
        Class.hasMany(models.Cards);
    }
    return Class;
}