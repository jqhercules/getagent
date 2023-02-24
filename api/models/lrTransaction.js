const bookshelf = require("../bookshelf.js")(),
	LRProperty = require("./lrProperty.js");

/**
 * This Bookshelf Model links to the lr_transactions database table. This stores transactions from the Land Registry's Price Paid Data.
 * There is 1 row per transaction.
 * @class LRTransaction
 * @property {Int} id Primary key
 * @property {Int} lr_property_id Links to a row in the lr_properties table
 * @property {Date} date The date the transaction took place
 * @property {Int} price The final sale price for the transaction
 */
const LRTransaction = bookshelf.Model.extend(/** @lends LRTransaction.prototype */{

	tableName: "lr_transactions",

	/**
	 * MANY-TO-ONE RELATION: The LRProperty that the transaction belongs to.
	 *
	 *
	 * @return {LRProperty}
	 */
	lrProperty: function()
	{
		return this.belongsTo("LRProperty");
	},
	
},
{

});

module.exports = bookshelf.model("LRTransaction", LRTransaction);