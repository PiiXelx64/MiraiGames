const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

const winver = "TWWIN.zip";
const linuxver = "TWOSX.zip";
const osxver = "TWLINUX.zip";

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile('index.html', {root: path.join(__dirname, 'public/')}));
app.get('/fr/a-propos', (req, res) => res.sendFile("about_us.html", {root: path.join(__dirname, 'public/fr')}));
app.get('/fr/media', (req, res) => res.sendFile("/medias.html", {root: path.join(__dirname, 'public/fr')}));
app.get('/fr/telecharger', (req,  res) => res.sendFile('download.html', {root: path.join(__dirname, 'public/fr')}))

app.get('/en/', (req, res) => res.sendFile('en/index.html', {root: path.join(__dirname, 'public/en')}));
app.get('/en/about', (req, res) => res.sendFile('about_us.html', {root: path.join(__dirname, 'public/en')}))
app.get('/en/media', (req, res) => res.sendFile('medias.html', {root: path.join(__dirname, 'public/en')}))
app.get('/en/download', (req, res) => res.sendFile('download.html', {root: path.join(__dirname, 'public/en')}))

app.use((req, res, next) => res.status(404).sendFile('error_404.html', {root: path.join(__dirname, 'public/en')}));

function download(version) {
    if(typeof version === "string") {
        switch (version) {
            case "WIN":
                return winver;
                break;
            case "LINUX":
                return linuxver;
            case "OSX":
                return osxver;
                break;
            default: 
                return "invalid version";
                break;
        }
    } else {
        return "invalid parameter : must be a string";
    }

}

app.listen(port, () => console.log("haha yes"));