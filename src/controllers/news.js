const News = require('../models/news');
const Match = require('../models/match');
const Tour = require('../models/tour');


const createMatchNews = async (id, title, description) => {
    let tourId = await Match.getTourIdFromMatch(id);
    let sportId = await Tour.getSportsIdFromTour(tourId);

    return await News.createNewsForMatch(title, description, id, tourId, sportId);
}

const createTourNews = async (tourId, title, description) => {

    let sportId = await Tour.getSportsIdFromTour(tourId);

    return await News.createNewsForTour(title, description, tourId, sportId);
}

const getMatchNews = async (matchId) => {
    return await News.getNewsByMatchId(matchId);
}

const getTourNews = async (tourId) => {
    return await News.getNewsByTourId(tourId);
}

const getSportNews = async (sportId) => {
    return await News.getNewsBySportId(sportId);
}


module.exports = {
    createMatchNews: createMatchNews,
    createTourNews: createTourNews,
    getMatchNews: getMatchNews,
    getTourNews: getTourNews,
    getSportNews: getSportNews
}