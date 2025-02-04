import express from 'express';
import axios from 'axios';
import path from 'path';
import { any } from 'three/tsl';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use('/three', express.static(path.join(__dirname, 'node_modules/three')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(express.static(path.join(__dirname, 'public')));

// Configuration API météo
const API_KEY = '27de5cc453d77aeea1386cf0eefb1bf7'; // process.env.API_KEY;
const CITY = 'Bordeaux';
const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

// Route principale qui sert index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  res.send('coucou')
});

// Route météo
app.get('/show_meteo', async (req, res) => {
  try {
    const response = await axios.get(APIURL);
    const data = response.data;
    
    const meteo = `Météo à ${data.name}: ${data.weather[0].description}, 
                   Température: ${data.main.temp}°C, 
                   Humidité: ${data.main.humidity}%, 
                   Vent: ${data.wind.speed} m/s`;

    res.send(meteo);
  } catch (error) {
    console.error('Erreur lors de la récupération des données météo:', error);
    res.status(500).send('Erreur serveur');
  }
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
