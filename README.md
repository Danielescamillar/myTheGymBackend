## Available Scripts

In the project directory, you can run:
### `npm run build`
To transpile the /dist file

### `npm run dev`
You can also use the `npm run dev` command to transpile and run the server with nodemon in a development environment

### `npm start`

Runs the `npm start` command in the production environment

### `npm test` 

## .env
In the .env file you will find the port on which the server runs and the connection url with mongo DB

## DB
The database creates an exercise table and a daily routine table with their respective schemas

## Folder order

### forlder db
All the db configuration is found

### forlder models
You will find the exercise and daily routine interfaces

### forlder services
You will find interactions with MongoDB to get and create

### forlder controllers
In the controllers we contract the use of the services

### forlder routes
In the routes we have a main index.ts file that gives us the route in which the different exercise routes and daily routines can be accessed

## tsconfig.json
In this file we find the typescript configuration








