const express = require("express");
const app = express();
const users = require('./users')

//const morgan = require('morgan');

// app.use <- looking for a function
//app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
  const html = `<!DOCTYPE html>
    <html>
    <head>
        <title>Simple-Acme-Users</title>
        <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
        <h1 class ="title">
            <a href="/">Home</a>
        </h1>
        <a href="/users">Users</a>
    </body>`
  res.send(html)
});

app.get("/users", (req, res) => {
    const userArray = users.list();
    //console.log(userArray)
    const html = `<!DOCTYPE html>
      <html>
      <head>
          <title>Simple-Acme-Users</title>
          <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
            <h1 class ="title">
                <a href="/">Home</a>
            </h1>
            <a href="/users">Users</a>
            <ul>${userArray.map(usr => `
                <li>
                    <a href="/users/${usr.id}">${usr.username}</a>
                </li>`).join('')}
            </ul>
      </body>`
    res.send(html)
  });

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const specficUser = users.find(id);
    const html = `<!DOCTYPE html>
      <html>
      <head>
          <title>Simple-Acme-Users</title>
          <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
            <h1 class ="title">
                <a href="/">Home</a>
            </h1>
            <a href="/users">Users</a>
            <div class="user-details">${specficUser.username}</div>
      </body>`
    res.send(html)
});
  
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
