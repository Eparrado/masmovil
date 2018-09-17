const express = require('express');
const app = express();

app.use(express.static('public'));

// ROUTES:
app.get('/phones', (request, response) => {
    console.log('Recibida peticion');
    let phones = [
        {
            id: 1,
            brand: 'Apple',
            title: 'iPhone X',
            color: 'Silver',
            photo: 'http://localhost:3001/images/iphone-x.jpg',
            description: '64 GB, 5.8" Super Retina HD Display, 12 Mpx, Red 4G LTE',
            price: '899.99$',
        },
        {
            id: 2,
            brand: 'Samsung',
            title: 'Galaxy S9+',
            color: 'Lilac Purple',
            photo: 'http://localhost:3001/images/samsung-galaxy.jpg',
            description: '64 GB, 6.2” QHD Super AMOLED Display, 8MP Front Facing Camera, Red 4G LTE',
            price: '840.00$'
        },
        {
            id: 3,
            brand: 'LG',
            title: 'V30',
            color: 'Silver',
            photo: 'http://localhost:3001/images/lg-v30.jpg',
            description: '64 GB, Dual 16MP/13MP Wide Rear Camera, 6.0" QHD+ FullVision, Red 4G LTE',
            price: '696.00$'
        },
        {
            id: 4,
            brand: 'Motorola',
            title: 'Moto e Plus 5th Gen',
            color: 'Blue',
            photo: 'http://localhost:3001/images/motorola-moto-e-plus.jpg',
            description: '32 GB, 6" Max Vision Display, Red 4G LTE',
            price: '225.00$'
        }
    ];
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.json(phones);
});

// START APP
app.listen(3001, () => console.log('Example app listening on port 3001!'))
