const Employee = require('../lib/Employee');

const managerCard = (managerCardTemplate) => {
	return `<div class="card">
    <div class="card-header">
      <h2>${managerCardTemplate.getName()}</h2>
      <h3>${managerCardTemplate.getRole()}</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${managerCardTemplate.getId()}</li>
        <li class="list-group-item">Email: ${managerCardTemplate.getEmail()}</li>
        <li class="list-group-item">Office Number: ${managerCardTemplate.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>`;
};

const engineerCard = (engineerCardTemplate) => {
	return `<div class="card">
    <div class="card-header">
      <h2>${engineerCardTemplate.getName()}</h2>
      <h3>${engineerCardTemplate.getRole()}</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${engineerCardTemplate.getId()}</li>
        <li class="list-group-item">Email: ${engineerCardTemplate.getEmail()}</li>
        <li class="list-group-item">GitHub: ${engineerCardTemplate.getGithub()}</li>
      </ul>
    </div>
  </div>`;
};

const internCard = (internCardTemplate) => {
	return `<div class="card">
    <div class="card-header">
      <h2>${internCardTemplate.getName()}</h2>
      <h3>${internCardTemplate.getRole()}</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${internCardTemplate.getId()}</li>
        <li class="list-group-item">Email: ${internCardTemplate.getEmail()}</li>
        <li class="list-group-item">School: ${internCardTemplate.getSchool()}</li>
      </ul>
    </div>
  </div>`;
};

const generateCardSection = (cardTemplate, cardType) => {
	switch (cardType) {
		case 'Manager':
			return managerCard(cardTemplate);
		case 'Engineer':
			return engineerCard(cardTemplate);
		case 'Intern':
			return internCard(cardTemplate);
		default:
			return '';
	}
};

const pageTemplate = (templateData) => {
	console.log(templateData);
	return `<!DOCTYPE html>
<html>
  <head>
      <title>Page</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</head>
  <body>
      <header class = "container">
          <div class = "row">
              <h1> My Team </h1>
          </div>
      </header>
      <main class = "container">
          ${generateCardSection(templateData)}
      </main>
  </body>
</html>
`;
};

module.exports = pageTemplate;
