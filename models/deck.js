module.exports = function (sequelize, DataTypes) {
  let Decks = sequelize.define("Decks", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });
  Decks.associate = function (models) {
    Decks.hasMany(models.Cards);
  };
  return Decks;
};
