# nodejs-backend-boilerplate
Fully functional NodeJS &amp; Express REST backend showcasing JWT Passport authentication, Winston logging and Sequelize ORM. Not another cluttered boilerplate, only must-haves inlcuded.

----------
Production ready example containing technologies **every** REST backend should use. It is also a showcase of used technologies and their basic usage.

----------
**Features:**

 - NodeJS based backend with Express wrapping
 - Sequelize ORM using PostgreSQL
	 - showcasing basic query API
	 - showcasing basic native API calls
	 - showcasing spatial queries
	 - Epilogue wrapper for more elegant exposal of REST entities
 - JWT authentication
	 - showcasing basic authentication and user roles
	 - showcasing Passport integration with Facebook and Google strategies
 - Logging using Winston logger into MongoDB
	 - showcase of intercepting and logging requests
 - Testing of REST endpoints using Chai and Chai Immutable

 In order to run the example:

  - Configure access to your PostgreSQL database (in config/config.json)
  - Configure access to MongoDB database (in config/mongo.config)
  - Configure Passport credentials for your app (in config/app_config.json)

Migrate models into your DB:

  `npm run db-migrate`

Seed mock entities into your DB:

  `npm run db-seed`

Start the backend:

  `npm run start`
