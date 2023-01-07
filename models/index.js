
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    'bhuvi',
    'root',
    '12345', {
  
        dialect: 'mysql',
        logging:false,  // message not show   
        host: 'localhost',
        define: {
            timestamps: false
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.movies = require('./moviesModel')(sequelize, DataTypes)
db.ratings = require('./ratingsModel')(sequelize, DataTypes)


db.sequelize.sync({ force:false })
.then(() => {
    console.log('yes re-sync done!')
})



//1 to Many Relation

db.movies.hasMany(db.ratings, {
    foreignKey: 'tconst',
})

db.ratings.belongsTo(db.movies, {
    foreignKey: 'tconst',
})


 


module.exports = db
