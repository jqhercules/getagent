const Router = require("@koa/router");
const router = new Router();
const LrProperty = require("./models/lrProperty");

const ID_REGEX = /^\d+$/;
const OUTCODE_REGEX = /^([A-Za-z]\d{1,2}|M\d{1,2}\s\d\w\w)$/i;
const STREET_REGEX = /^[A-Za-z\s]+$/i;

router.get("/", async (ctx) => {
  ctx.body = "I'm alive!";
});

router.get("/lrProperty/:term", async (ctx) => {
  const term = ctx.params.term;
  const { page = 1, pageSize = 10 } = ctx.query;
  const offset = (page - 1) * pageSize;

  let properties;

  // query based on search term
  if (ID_REGEX.test(term)) {
    properties = await LrProperty.where({
      id: ctx.params.term,
    })
      .fetchPage({
        withRelated: ["lrTransactions"],
        require: false,
        page: page,
        pageSize: pageSize,
      })
      .catch((err) => {
        console.error(err);
        ctx.status = 500;
        ctx.body = { error: true, msg: "No properties found with this ID" };
      });
  } else if (STREET_REGEX.test(term)) {
    properties = await LrProperty.where({
      street: ctx.params.term,
    })
      .query((qb) => {
        qb.offset(offset).limit(pageSize);
      })
      .fetchAll({ withRelated: ["lrTransactions"], require: false })
      .catch((err) => {
        console.error(err);
        ctx.status = 500;
        ctx.body = { error: true, msg: "No properties found on this street" };
      });
  } else if (OUTCODE_REGEX.test(term)) {
    properties = await LrProperty.where({
      outcode: ctx.params.term,
    })
      .query((qb) => {
        qb.offset(offset).limit(pageSize);
      })
      .fetchAll({ withRelated: ["lrTransactions"], require: false })
      .catch((err) => {
        console.error(err);
        ctx.status = 500;
        ctx.body = { error: true, msg: "No properties found for this outcode" };
      });
  }

  if (!properties) {
    ctx.status = 404;
    ctx.body = { error: true, msg: "No properties found" };
    return;
  }

  ctx.body = { success: true, lrProperty: properties.toJSON() };
});

module.exports = (app) => {
  app.use(router.routes()).use(router.allowedMethods());
};
