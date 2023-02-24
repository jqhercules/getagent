# Welcome to the GetAgent Fullstack Developer test!

The aim of this test is to get a sense of your experience, but without taking up much of your time!

## Project structure

### API

A simple API has already been setup. This uses data from a sqlite database (included in this project). The API is powered by [Koa](https://github.com/koajs/koa), and uses [Bookshelf](https://bookshelfjs.org/) as an ORM.

To get started:

Inside the "api" folder:

- run `yarn`
- run `yarn start`

### Frontend

- (IMPORTANT) [CRA] was replaced with vite `https://vitejs.dev/` visit `http://127.0.0.1:5173` to view the frontend. This was done to provide a better dev experience.

A simple [CRA](https://create-react-app.dev) skeleton has already been setup. This includes basic configuration so it is ready to load data from the API.

Inside the "frontend" folder:

- run `yarn`
- run `yarn start`

## Your mission

The database includes property transactions from 4 London outcodes: "E1", "E2", "E10", "E11". There are 2 tables, one contains a list of properties, and the other contains a list of transactions. These tables are linked, and this relationship is also already setup in the Bookshelf models.

**Please create a simple interface so a user can search for property transactions and display them.**

It should:

- Accept a property ID, postcode or street
- Display the matching properties with the corresponding transaction(s).

You'll need to:

- Create the interface within the CRA
- Add a new route to the API to do the searching

What we're looking for:

- Concise code that is sensibly structured. You won't be able to account for every edge case, but please leave a comment where you've taken shortcuts.
- A simple interface which is cleanly laid out. Use any framework you're comfortable with (we use [react-bootstrap](https://react-bootstrap.github.io/)).
- Feel free to edit the database structure to improve performance
