# MoodyApp

MoodyApp is a mobile application that lets users record, monitor and analyse their daily moods.

## Description

After logging in, users may go to their dashboard to see all their previously recorded moods, along with the intensity ratings and any notes they left themselves.

Adding a mood is a simple, three-step process: just select the mood that feels right, slide the intensity rating that goes from 1 to 10, add a note if desired, and click “add mood”!

The analytics tab shows users their most frequent moods overall, and their moods over the course of the month.

![MoodyApp user flow](https://github.com/BOUNCE8/MoodyApp/raw/feature/brandAssets/brand%20assets/%23B8D8B7.png)

## Getting Started

1. Clone this repo:

```
git clone https://github.com/BOUNCE8/MoodyApp-Backend.git
cd MoodyApp-Backend
```

2. Install [PostgreSQL](https://www.postgresql.org/) on your local machine.

3. Inside the project's root directory, install [Prisma](https://www.prisma.io/)

4. Inside the project's root directory, create a .env file for your IP address and your database URL, using the following scheme:

```
DATABASE_URL="postgresql://[username]:[password]@localhost:[portnumber]/[database_name]"
ROUTER_IP=XX.XX.XX.XXX
```

5. From inside the project folder, use [npm](https://npmjs.com/) to install MoodyApp's dependencies:

```
npm install
```

6. Start MoodyApp's server and database by running

```
npm start
```

7. Clone, install and start MoodyApp's client from the [MoodyApp frontend repo](https://github.com/BOUNCE8/MoodyApp/tree/development)

## Tech Stack

- Frontend:

  - [React Native](https://reactnative.dev/)
  - [Expo](https://expo.io/)
  - [Redux](https://redux.js.org/)
  - [Typescript](https://www.typescriptlang.org/)

- Backend:
  - [Express](https://expressjs.com/)
  - [PostgreSQL](postgresql.org/)
  - [Prisma](https://www.prisma.io/)
  - [Typescript](https://www.typescriptlang.org/)

## Roadmap

MoodyApp is in its first developmental release. Future releases will include deployment on AWS, will let users set notifications to prompt them to update their moods, and will allow users to share their mood records with friends on the app.

## Contributors

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
