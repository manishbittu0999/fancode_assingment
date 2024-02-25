const mysql = require('../lib/mysql');

const createNewsForMatch = async (title, content, matchId, tourId, sportId) => {
    const statement = 'insert ignore into mydb.news (title, content, matchId, tourId, sportsId) values (?, ?, ?, ?, ?);';
    const parameters = [title, content, matchId, tourId, sportId];
    return await mysql.query(statement, parameters);
}

const createNewsForTour = async (title, content, tourId, sportId) => {
    const statement = 'insert ignore into mydb.news (title, content, tourId, sportsId) values (?, ?, ?, ?);';
    const parameters = [title, content, tourId, sportId];
    return await mysql.query(statement, parameters);
}

const getNewsByMatchId = async (matchId) => {
    const statement = 'SELECT * FROM mydb.news where matchId=?;';
    const parameters = [matchId];
    return await mysql.query(statement, parameters);
}

const getNewsByTourId = async (tourId) => {
    const statement = 'SELECT * FROM mydb.news where tourId=?;';
    const parameters = [tourId];
    return await mysql.query(statement, parameters);
}

const getNewsBySportId = async (sportId) => {
    const statement = 'SELECT * FROM mydb.news where sportsId=?;';
    const parameters = [sportId];
    return await mysql.query(statement, parameters);
}

module.exports = {
    createNewsForMatch: createNewsForMatch,
    createNewsForTour: createNewsForTour,
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewsBySportId: getNewsBySportId
}