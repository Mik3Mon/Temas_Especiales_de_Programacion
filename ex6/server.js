const app = require('./app');
require('dotenv').config();
const mongoDBConnect = require('./db/mongo');

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoDBConnect(MONGO_URI)
    .then(() => {
        console.log(`db connected`)
    })
    .catch((err) => {
        console.error(err);
    })

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});