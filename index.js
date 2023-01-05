const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({ name, location, github, linkedin }) =>
  `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>${name}'s Portfolio</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
      />
    </head>
    <body>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <h1 class="title">${name} ${lastName}</h1>
        </div>
  
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a href="https://www.linkedin.com/in/${linkedin}" class="navbar-item">
              LinkedIn
            </a>
  
            <a href="https://github.com/${github}" class="navbar-item">
              Github
            </a>
          </div>
        </div>
      </nav>
  
      <section class="section">
        <div class="container">
          <p class="subtitle">Welcome to my Portfolio!</p>
        </div>
        <p>Hello my name is ${name}, I currently live in ${location}.</p>
        <p>I am currently learning to code in ${learningLang}.</p>
        <p>I know already how to code in ${languages}.</p>
      </section>
  
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            To learn more about me, please checkout out my
            <a href="https://github.com/${github}"> Github</a>
            or my
            <a href="https://www.linkedin.com/in/${linkedin}">
              LinkedIn
            </a>
            or send me an email at: ${email}
          </p>
        </div>
      </footer>
    </body>
  </html>`;

  inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });