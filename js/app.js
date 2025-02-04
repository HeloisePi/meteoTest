"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const API_KEY = '27de5cc453d77aeea1386cf0eefb1bf7'; //process.env.API_KEY;
const CITY = 'Bordeaux';
const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;
app.get('/', (req, res) => {
    res.send('hello world');
});
app.get('/show_meteo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.get(APIURL);
        const data = response.data;
        const meteo = `Météo à ${data.name}: ${data.weather[0].description}, 
                   Température: ${data.main.temp}°C, 
                   Humidité: ${data.main.humidity}%, 
                   Vent: ${data.wind.speed} m/s`;
        res.send(meteo);
    }
    catch (error) {
        res.send('Erreur lors de la récupération des données météo.');
    }
}));
app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});
