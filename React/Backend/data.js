const express = require('express');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/api/products', (req,res)=>{
    const products = [{
        id: 1,
            name: "Laptop",
            price: 50000
    },{
        id: 2,
            name: "PC",
            price: 30000
    }]
    res.json(products);
})

app.listen(5000, ()=>{
    console.log("App is listening on port http://localhost:5000")
})