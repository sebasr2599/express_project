# About

This is a personal project made to learn and better understand nodejs and express by building a REST API.

# Getting started

## Install

Clone the project and run

```
npm intall
```

## Running the project

To call a script, simply run `npm run <script-name>` from the command line.
| Script | Description |
| ------- | ----------- |
| `build ` | Fully builds the project |
| `dev ` | Used to run the development environment |
| `lint ` | Run de eslint to check the code |
| `start ` | Starts the node server |
| `test ` | Run the tests |

# Overview

## Dependencies

-   [expressjs](https://expressjs.com/) - The server for handling and routing HTTP requests.
-   [typescript](https://www.typescriptlang.org) - Superset of javascript for better development.
-   [dotenv](https://www.npmjs.com/package/dotenv) - Load environment variables to the application.
-   [eslint](https://eslint.org) - Find and fix problems in your javascript, in this case for typescript.
-   [nodemon](https://www.npmjs.com/package/nodemon) - helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
-   [concurrently](https://www.npmjs.com/package/concurrently) - Run multiple commands concurrently.

## Application Structure

-   `src/configs` - All the configuration needed for the project.
-   `src/controllers` - All the controllers used by the project.
-   `src/middleware` - All the middleware used.
-   `src/routes` - Keeps the routes for the project.
-   `src/models` - Models used for the database.
-   `src/models` - Models used for the database.
-   `src/services` - All the business logic of the aplication.
-   `src/services` - Utilities and helpers for the application.

## Authentication
