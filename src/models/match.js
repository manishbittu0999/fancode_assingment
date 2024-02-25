const mysql = require('../lib/mysql');

const getAllMatches = async () => {
    const statement = 'select * from matches;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getTourIdFromMatch = async (id) => {
    const statement = 'select tourId from mydb.matches where id=?;';
    const parameters = [id];

    const result = await mysql.query(statement, parameters);
    const tourId = result[0].tourId;
    
    return tourId;
}

module.exports = {
    getAllMatches: getAllMatches,
    getTourIdFromMatch: getTourIdFromMatch
}