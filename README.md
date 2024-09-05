# Node.js Backend Template

This repository provides a boilerplate for building Node.js backend applications with Express, environment configuration, linting, and basic testing setup.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Server](#running-the-server)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [Linting and Formatting](#linting-and-formatting)
- [Contributing](#contributing)
- [License](#license)
- [Preloaded packages or libraries](#preloaded-packages-or-libraries)
- [Potential packages or libraries](#potential-packages-or-libraries)

## Features

- Express for creating server and handling routes.
- Environment variable management using `dotenv`.
- Code linting with ESLint.
- Code formatting with Prettier.
- Structured project directories.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (v6.x or higher)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/hasibiqbal207/nodejs-backend-template.git
    cd nodejs-backend-template
    ```

2. **What to do before using this boilerplate**

- From the ''nodejs-backend-template'' folder, run the following commands to remove all the '.git' files:

    ```bash
    # From Linux based OS | using Terminal
    find . -name ".git*" -exec rm -rf {} +

    # From Windows based OS | using PowerShell
    Get-ChildItem -Recurse -Force -Filter ".git*" | Remove-Item -Force -Recurse
    ```

- Rename the Folder name from 'nodejs-backend-template' to 'project-name' **or** <br /> Copy all the
    files in the 'project-name' folder.
    
- The 'project-name' folder should be tracked with Git. If it's tracked then only add a .gitignore file and add the following lines to .gitignore file:
 
    ```bash
    node_modules/
    .env*
    ```   

- If it's not tracked, run the following command to add it to Git: 

    ```bash
    git init

    # Add a .gitignore file to ignore all the files in the 'project-name' folder. Add the following lines to .gitignore file:
    node_modules/
    .env*

    # Save the changes and then commit the changes:
    git add .
    git commit -m "Initial commit"
    ```

- Change the following attributes in 'package.json' file:
    ```bash
    "name": "Change to project-name",
    "description": "Change to any description",
    "author": "Change to your name",
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

    If you are installing in Production environment, run the following command instead of the above command:
    ```bash
    npm install --production
    ```

## Running the Server

1. **Start the server in development mode:**

    ```bash
    # Start the server with nodemon
    npm run dev

    # Start the server with node
    npm run start:dev
    ```

2. **Start the server in testing mode:**

    ```bash
    npm run start:test
    ```

3. **Start the server in production mode:**

    ```bash
    npm run start:prod
    ```
    
4. **Start the server in staging mode:**

    ```bash
    npm run start:staging
    ```
    
## Environment Variables

This repository contains separate configurations for development, testing, staging, and production. It is advisable to use different environment variables for different environments. 

## Testing


## Linting and Formatting
This repository contains a linter **[ESLint]** and a formatter **[Prettier]**. The linter and formatter are configured to run on the project.

    ```bash
    npm run lint
    npm run format
    ```

## Contributing
Please Visit [Contributing](CONTRIBUTING.md) file for more details.

## License
The software in this project is licensed under the Apache License 2.0, a permissive open-source license. By using this software, you agree to the following terms:

**Summary of the Apache License 2.0**

1. **Freedom to Use**: You can use the software for any purpose, including commercial use, without paying royalties.
2. **Modification and Distribution**: You can modify the software and distribute it in either its original or modified form, as long as you include the original license and clearly mark any changes you made.
3. **Patent Rights**: The license grants you rights to any patents held by the contributors related to the software, but if you sue anyone over patent issues involving the software, your license and patent rights terminate.
4. **No Trademark Rights**: The license doesn’t grant permission to use the names, trademarks, or logos of the contributors.
5. **No Warranty**: The software is provided "as is," without any warranties, meaning the contributors aren't responsible for any issues or damages that arise from using it.
6. **Optional Support**: If you offer warranties, support, or assume additional liability when redistributing the software, you're responsible for those obligations, not the original contributors.

**Copyright Notice**

    Copyright 2024 Hasib Iqbal

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

## Preloaded packages or libraries
A small introduction of the preloaded packages or libraries in this repository:

**compression:** Middleware that compresses response bodies for all requests to decrease the amount of data transmitted to clients. Useful for most Node.js applications to improve performance.

**cors:** Middleware to enable Cross-Origin Resource Sharing (CORS) in Node.js applications, allowing resources to be requested from another domain. Essential for applications with front-end clients on different domains.

**Express:** A fast, minimalist web framework for Node.js, used for building web applications and APIs.

**dotenv:** A zero-dependency module that loads environment variables from a .env file into process.env in Node.js.

**helmet:** Middleware that helps secure Node.js applications by setting various HTTP headers. Highly recommended for most Node.js applications to enhance security.

**http-errors:** Library for creating HTTP errors with ease. Useful for applications that need standardized error handling, which is common but not required for all applications.

**morgan:** HTTP request logger middleware for Node.js. Useful for logging request details, which is beneficial for most applications, especially during development and debugging.

**winston:** Versatile logging library for Node.js. Useful for most applications needing detailed logging beyond simple console outputs.

**nodemon:** Utility that automatically restarts the Node.js application when file changes in the directory are detected. Very useful for development environments but not needed in production.

**ESLint:** A configurable linter tool for identifying and fixing JavaScript (and TypeScript) code quality and style issues.

**Prettier:** An opinionated code formatter that enforces a consistent style by parsing your code and reprinting it with its own rules.

## Potential packages or libraries
A small introduction of the potential packages or libraries that could be used:

**cron:** Library for scheduling jobs to run at specific times or intervals. Useful for applications needing scheduled tasks, such as cleanup scripts or data processing jobs.

**joi:** Schema description and data validation library for JavaScript. Useful for applications that require robust input validation, which is common in most back-end applications.

**lodash:** A utility library offering many useful functions for common programming tasks. Useful for most Node.js applications to simplify and enhance JavaScript development.

**ulid:** Universally Unique Lexicographically Sortable Identifier, a unique ID generator. Useful for applications that need to generate unique IDs, but not necessary for all applications.

**validator:** Library for string validation and sanitization. Useful for most applications requiring robust input validation to ensure data integrity and security.

**cookie-parser:** Middleware to parse cookies attached to the client request object. Useful for applications handling cookies, which is common but not necessary for all Node.js applications.