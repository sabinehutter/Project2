module.exports = function(sequelize, DataTypes) {
   const Member = sequelize.define("Member", {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      joined_group: {
         type: DataTypes.STRING
      },
      first_name :{
         type: DataTypes.STRING
      }, 
      last_name :{
         type: DataTypes.STRING
      }, 
      social_handle :{
         type: DataTypes.STRING
      }, 
      zip_code :{
         type: DataTypes.INTEGER
      }, 
      description :{
         type: DataTypes.STRING
      }, 
      img_url :{
         type: DataTypes.STRING
      }, 
   });
   return Member;
};
 