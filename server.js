const express = require('express');
const app = express();
const port = 8080;


const winver = "path to winver";
const linuxver = "path to linuxver";
const osxver = "path to osxver";

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile('index.html'));
app.get('/fr/a-propos', (req, res) => res.sendFile("fr/about_us.html"));
app.get('/fr/media', (req, res) => res.sendFile("fr/medias.html"));
app.get('/fr/telecharger', (req,  res) => res.sendFile('fr/download.html'))

app.get('/en/', (req, res) => res.sendFile('en/index.html'));
app.get('/en/about', (req, res) => res.sendFile('en/about_us.html'))
app.get('/en/media', (req, res) => res.sendFile('en/medias.html'))



function download(version) {
    if(typeof version === "string") {
        switch (version) {
            case "WIN":
                return winver;
                break;
            case "LINUX":
                return linuxver;
            case "OSXVER":
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