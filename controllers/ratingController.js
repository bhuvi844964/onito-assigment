const db = require('../models')
const { Op } = require("sequelize");


const Rating = db.ratings
const Movie = db.movies


const getAllRating = async (req, res) => {

    const data = await Rating.findAll({
        order: [["averageRating", "DESC"]],
        attributes: ['tconst', 'averageRating'  ],
        include: [{
            model: Movie,
            attributes: { exclude: ['tconst', 'runtimeMinutes' ] }
    }],

        where: {
            averageRating: {
                [Op.gt]: 6
            }
        }

    })
    res.status(200).send(data)

}

module.exports = {getAllRating }   



