const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
    {
        name: "Gorgeous dress",
        img: "https://assets.ajio.com/medias/sys_master/root/20240715/5zVz/66946a251d763220faa22999/-473Wx593H-464634840-multi-MODEL.jpg",
        price: 11000,
        desc: "very costly, aukaat ke bahar"
    },
    {
        name: "Wedding Dress",
        img: "https://i.pinimg.com/236x/43/ca/8a/43ca8a3f68d3d469090df1bf605d0d47.jpg",
        price: 10000,
        desc: "very costly, aukaat ke bahar"
    },
    {
        name: "Pink Gown",
        img: "https://i.pinimg.com/236x/2e/f3/54/2ef3540cafcfdd56f7b3f433bb35bbed.jpg",
        price: 9000,
        desc: "very costly, aukaat ke bahar"
    },
    {
        name: "Midi",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpolW2Lie1cui-pOruxDyM70p4f8xKyV1YpQ&s",
        price: 12000,
        desc: "very costly, aukaat ke bahar"
    },
    {
        name: "Long Sleeve Gown",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCr2U6DcStH2eiRclHCzEdVHV2x5aRI60eA&s",
        price: 15000,
        desc: "very costly, aukaat ke bahar"
    }
];

async function seedDB(){
    await Product.insertMany(products);
    console.log("Data seeded successfully!");
}

module.exports = seedDB;