'use strict';
module.exports = (sequelize, DataTypes) => {
  var mahasiswa = sequelize.define('mahasiswas', {
    npm: DataTypes.STRING,
    nama: DataTypes.STRING,
    no_telp: DataTypes.STRING,
  }, {
    underscored: true,
  });
  mahasiswa.associate = function(models) {
    // associations can be defined here
  };
  return mahasiswa;
};