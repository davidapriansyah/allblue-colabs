const express = require('express');
const session = require('express-session');
const app = express();
const router = require('./routers/index.js');
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
