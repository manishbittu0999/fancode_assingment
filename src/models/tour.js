const mysql = require('../lib/mysql');

const getAllTours = async () => {
    const statement = 'select * from tours;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getMatchesByTourName = async params => {
    const statement = 'select * from matches left join tours on matches.tourId = tours.id where tours.name = ?';
    const parameters = [ params.name ];
    return await mysql.query(statement, parameters);
}

const getSportsIdFromTour = async (id) => {
    const statement = 'select sportId from mydb.tours where id=?;';
    const parameters = [id];

    const result = await mysql.query(statement, parameters);
    const tourId = result[0].sportId;
    
    return tourId;
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName,
    getSportsIdFromTour: getSportsIdFromTour
}