const db = require('../models')

const Movie = db.movies

const addMovie = async (req, res) => {

    let info = {
        tconst: req.body.tconst,
        titleType: req.body.titleType,
        primaryTitle: req.body.primaryTitle,
        runtimeMinutes: req.body.runtimeMinutes,
        genres: req.body.genres,
       
    }
    const book = await Movie.create(info)
    res.status(200).send("success")
  
}



const getAllMovie = async (req, res) => {

    let data = await Movie.findAll({

        attributes: ['tconst', 'primaryTitle', 'runtimeMinutes' , 'genres' ],
        order: [["runtimeMinutes", "DESC"]],
          limit: 10 

    })
    res.status(200).send(data) 

} 



module.exports = { addMovie , getAllMovie }