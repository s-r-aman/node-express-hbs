const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 4000;

app.set('view engine', 'hbs');

app.use(express.static(__dirname + "/public"));

hbs.registerPartials( __dirname +'/views/partials');

hbs.registerHelper('scream', (text) => {
  return  text.toUpperCase();
});

app.get('/', (request, respond) => {
    respond.render('index.hbs', {
        pageTitle: 'Node App | Welcome',
        head: 'Hey There! Welcome to the app.',
        message: 'This is the home page of the app.'
    });
});

app.get("/about", (request, respond) => {
  respond.render("about.hbs", {
    pageTitle: "Node App | About",
    head: "About Me.",
    message: "Nothing Much. Like to make apps and music."
  });
});

app.get("/amaze", (request, respond) => {
  respond.render("amaze.hbs", {
    pageTitle: "Node App | find something amazing.",
    head: "Find Something Amazing",
    message: "Just look at that ART!"
  });
});

app.get('/app.css', (request, respond) => {
  respond.send('app.css');
});

app.listen(port);