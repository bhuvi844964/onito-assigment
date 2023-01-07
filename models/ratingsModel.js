module.exports = (sequelize, DataTypes) => {

    const Rating = sequelize.define("rating", {
      tconst: {
        type: DataTypes.TEXT,
        // autoIncrement: true,
        allowNull: false,
        primaryKey: true,
          },
          averageRating: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            field: 'averageRating'
          },
          numVotes: {
              type: DataTypes.INTEGER
          },
         
    })

    return Rating

}