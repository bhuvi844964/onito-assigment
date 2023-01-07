const db = require("../models");
const { Op } = require("sequelize");

const Rating = db.ratings;
const Movie = db.movies;

const getAllRating = async (req, res) => {
  try {
    const data = await Rating.findAll({
      order: [["averageRating", "DESC"]],
      attributes: ["tconst", "averageRating"],
      include: [
        {
          model: Movie,
          attributes: { exclude: ["tconst", "runtimeMinutes"] },
        },
      ],

      where: {
        averageRating: {
          [Op.gt]: 6,
        },
      },
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
};

module.exports = { getAllRating };
