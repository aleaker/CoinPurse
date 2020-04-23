# Coin Purse

Coin Purse is a crypto assets organizer. Still in develompent.

## Pictures
![mobile login](https://user-images.githubusercontent.com/52142096/80117132-29535000-855d-11ea-87bf-6ffdaafa7880.jpg)
![mobile home](https://user-images.githubusercontent.com/52142096/80117156-2f493100-855d-11ea-9fe2-fee08991b154.jpg)
![desktop home](https://user-images.githubusercontent.com/52142096/80117230-4ee05980-855d-11ea-89aa-94048295d62e.png)

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
