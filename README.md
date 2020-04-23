# Coin Purse

Coin Purse is a crypto assets organizer. 

## How to run it on a local server

1) Clone this repository

2) Install Psql and create a database named "coinpurse". You can change de db name from CoinPurse/back/config/db

3) Install its dependencies on CoinPurse/back and CoinPurse/front

```bash
npm i
```

4) Start the server in the back and transpile in the front

* CoinPurse/back

```bash
npm start
```

* CoinPurse/front

```bash
npm run build
```

5) Now the project should be running at http://localhost:3000/


## Made using

* Javascript
* Node
* Express
* React-redux
* Webpack
* Babel
* CoinCap API: https://docs.coincap.io/?version=latest
* Cryptocurrency-icons: https://github.com/atomiclabs/cryptocurrency-icons


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



## License
[MIT](https://choosealicense.com/licenses/mit/)
