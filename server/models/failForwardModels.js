const { Pool } = require('pg');

const PG_URI = 'postgres://ksalklkk:ESXGoFF-hND6qTbm8p1ignlvt6JqjAm_@kashin.db.elephantsql.com/ksalklkk'

const pool = new Pool({
    connectionString: PG_URI
});


module.exports = {
    query: (text, params, callback) => {
        console.log('execute query', text);
        return pool.query(text, params, callback);
    }
}