SETUP

1. Create a new project based on this template using the `Use this template` button

![HOW_TO_USE](https://user-images.githubusercontent.com/20372832/77003323-70966180-695d-11ea-8abe-b362d57135f3.gif)

2. Clone the app

```
git clone git@github.com:YOUR_GITHUB_NAME/YOUR_PROJECT_NAME.git
```

3. cd into your project

```
cd YOUR_PROJECT_NAME
```

4. install dependencies

```
npm install
```

5. Configure your database in `config/config.json`

The default assumes a postgres database with

- username: postgres
- password: secret

```json
// config/config.json
{
  "development": {
    "username": "postgres",
    "password": "secret",
    "database": "YOUR_PROJECT_NAME_HERE_development",
    "host": "localhost",
    "dialect": "postgres",
    "operatorsAliases": "0"
  }
}
```

6. Create database, run migrations & seed data

`package.json` contains a script for this

```bash
npm run initdev
```

Or run the commands seperately

```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

7. start server with `nodemon` (recommended for development)

```
npm run dev
```

8. or start normally

```
npm start
```


## Sample requests with axios

To demo making request to this server, some small script are included that make requests using `axios`

The scripts can be found in [/sampleRequests](./sampleRequests)

1. Make sure to follow the the setup in this readme first
2. cd sampleRequests
3. Run example requests

```
node hello.js
node echo.js
node signup.js
node login.js
node me.js
node authorizedPost.js
```

## Sample requests with httpie

To demo making request to this server, bash commands are included that make requests using `httpie`

They can found in [./sampleRequests/httpie.md](./sampleRequests/httpie.md)
