// Add a flag for the text attribute to prevent this field from being null

// Add a validation for the text attribute to make sure it's at least one character,
// but no more than 140 characters

// Add a flag for complete so that it's false by default if not given a value

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false, 
      // validate: {
      //   len: [1, 140]  // between 1 and 140 
      // }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false 
    }                  

  });
  return Burger;
};


