const express = require('express');
const routes = require('./routes');


const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use('/', routes);


if (require.main === module) {
app.listen(port, () => {
console.log(`App listening on port ${port}`);
});
}


module.exports = app; // exported for tests