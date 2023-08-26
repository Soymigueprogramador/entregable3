/*const express = require('express');
const ProductManager = require('./productManager'); 
const app = express();
const port = 3000;
const productManager = new ProductManager();
app.get('/products', (req, res) => {
    const limit = req.query.limit;
    const products = limit ? productManager.getLimitedProducts(limit) : productManager.getAllProduct();
    res.json(products);
});
app.get('/products/:pid', (req, res) => {
    const pid = req.params.pid;
    const product = productManager.getProductById(pid);
    res.json(product);
});
app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto ${port}`);
});*/ 

const express = require('express');
const ProductManager = require('./productManager'); 
const app = express();
const port = 3000;

const productManager = new ProductManager();

// Agregar productos al productManager
productManager.addProduct({ id: '1', name: 'llavero', price: 10 });
productManager.addProduct({ id: '2', name: 'taza', price: 10 });
productManager.addProduct({ id: '3', name: 'muñeca', price: 50 });
productManager.addProduct({ id: '4', name: 'mate', price: 30 });
productManager.addProduct({ id: '5', name: 'porta celular', price: 200 });
productManager.addProduct({ id: '6', name: 'vaso', price: 10 }); // Corregido 'baso' a 'vaso'
productManager.addProduct({ id: '7', name: 'plato', price: 10 });
productManager.addProduct({ id: '8', name: 'jarra', price: 20 });
productManager.addProduct({ id: '9', name: 'cuchara', price: 10 });
productManager.addProduct({ id: '10', name: 'tenedor', price: 10 });
productManager.addProduct({ id: '11', name: 'espatula', price: 10 });

app.get('/products', (req, res) => {
    const limit = req.query.limit;
    const products = limit ? productManager.getLimitedProducts(limit) : productManager.getAllProducts(); // Corregido 'getAllProduct' a 'getAllProducts'
    res.json(products);
});

app.get('/products/:pid', (req, res) => {
    const pid = req.params.pid;
    const product = productManager.getProductById(pid);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto ${port}`);
});
