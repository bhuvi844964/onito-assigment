
module.exports =  (sequelize, DataTypes)=>{

    const Movie = sequelize.define("movie", {
      tconst: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true,
    },
    titleType: {
      type: DataTypes.TEXT
    },
    primaryTitle: {
        type: DataTypes.TEXT
    },
    runtimeMinutes: {
      type: DataTypes.INTEGER,
      // field:'runtimeMinutes',
    },
    genres: {
        type: DataTypes.TEXT
    }
       
     });
    
     return Movie
    }