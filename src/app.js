const express = require('express');
const ProductManager = require('./productManager'); 

const app = express();
const port = 3000;

const productManager = new ProductManager(); // Crea una instancia de ProductManager (implementa la lógica en ProductManager.js)

// Endpoint para obtener la lista de productos con opción de limitar resultados
app.get('/products', (req, res) => {
    const limit = req.query.limit;
    const products = limit ? productManager.getLimitedProducts(limit) : productManager.getAllProducts();
    res.json(products);
});

// Endpoint para obtener un producto por su ID
app.get('/products/:pid', (req, res) => {
    const pid = req.params.pid;
    const product = productManager.getProductById(pid);
    res.json(product);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto ${port}`);
});
