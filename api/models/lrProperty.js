const bookshelf = require("../bookshelf.js")(),
	LRTransaction = require("./lrTransaction.js");

/**
 * This Bookshelf Model links to the lr_properties database table. This stores individual properties which have 1 or more transactions in the Land Registry's Price Paid Data.
 * @class LRProperty
 * @property {Int} id Primary key
 * @property {String} outcode Property outcode
 * @property {String} incode Property incode
 * @property {String} paon House number or building name
 * @property {String} saon Flat number (may be empty)
 * @property {String} street Street name
 *
 */
const LRProperty = bookshelf.Model.extend(/** @lends LRProperty.prototype */{

	tableName: "lr_properties",

	/**
	 * MANY-TO-ONE RELATION: The LRTransactions that belong to this property.
	 *
	 *
	 * @return {LRTransaction}
	 */
	lrTransactions: function()
	{
		return this.hasMany("LRTransaction").query("orderBy", "lr_transactions.date", "ASC");
	},

},
{


});

module.exports = bookshelf.model("LRProperty", LRProperty);
