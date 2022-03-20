# Setting up Project
- Clone the repo
- Create a .env file in root directory
- Add following environment variables in .env
```
DB_USERNAME = YOUR_MONGO_DATABASE_USERNAME
DB_PASSWORD = YOUR_MONGO_DATABASE_PASSWORD
PORT = 4000
```
- Run the following commands to get started
```
npm install
npm start
```
- Open http://localhost:4000 in your browser
- Write the following gql queries to populate values in DB
```
mutation {
addCountries
}
```
```
mutation {
addGlobal 
}
```
- Now run the covid-tracker-client 🎊
