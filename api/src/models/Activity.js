
const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      defaultValue: UUIDV4
    },
      name:{
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      difficulty:{
        type: DataTypes.ENUM("1", "2" , "3" , "4" , "5"),
        allowNull: false,
      },
      duration:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      season:{
        type: DataTypes.ENUM('Summer','Autumn', 'Winter','Spring'),
        allowNull: false,
      },


},{timestamps:false});
};