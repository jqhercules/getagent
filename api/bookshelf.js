const config = require("./config");

let knex = null,
	bookshelf = null;

module.exports = () =>
{
	if(bookshelf)
		return bookshelf;

	knex = require('knex')({
		client: 'sqlite3',
		connection: () => ({filename: config.dbfile}),
		useNullAsDefault: true
	});

	bookshelf = require('bookshelf')(knex);

	return bookshelf;
}




