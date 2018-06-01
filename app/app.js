const express = require('express');
const reload = require('reload');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Pet Weather App';

app.use(express.static('app/public'));
app.use(require('./routes/pet_list'));
app.use(require('./routes/pet_view'));
app.use(require('./routes/pet_add'));

const server = app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});

reload(server, app);
