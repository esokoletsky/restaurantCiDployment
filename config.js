'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://esokoletsky:deskjet11@ds263642.mlab.com:63642/restaurant-travisci';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://esokoletsky:deskjet11@ds263642.mlab.com:63642/restaurant-travisci';
exports.PORT = process.env.PORT || 8080;