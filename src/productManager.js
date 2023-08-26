/*const app = require('./app');

class productManager {
    constructor() {
        this.product = [];
    }
    addProduct(product) {
        this.product.push(product);
    }
    
    getAllProduct() {
        return this.product;
    }
    getLimitedProducts(limit) {
        return this.product.slice(0, limit);
    }
    getProductById(pid) {
        return this.product.find(product => product.id === pid);
    }
}
const productManager = new productManager(); 
productManager.addProduct({ id: '1', name: 'llavero', price: 10 });
productManager.addProduct({ id: '2', name: 'taza', price: 10 });
productManager.addProduct({ id: '3', name: 'muñeca', price: 50 });
productManager.addProduct({ id: '4', name: 'mate', price: 30 });
productManager.addProduct({ id: '5', name: 'porta celular', price: 200 });
productManager.addProduct({ id: '6', name: 'baso', price: 10 });
productManager.addProduct({ id: '7', name: 'plato', price: 10 });
productManager.addProduct({ id: '8', name: 'jarra', price: 20 });
productManager.addProduct({ id: '9', name: 'cuchara', price: 10 });
productManager.addProduct({ id: '10', name: 'tenedor', price: 10 });
productManager.addProduct({ id: '11', name: 'espatula', price: 10 });
module.exports = ProductManager;*/

class ProductManager {
    constructor() {
        this.products = [];
    }
    
    addProduct(product) {
        this.products.push(product);
    }
    
    getAllProducts() {
        return this.products;
    }
    
    getLimitedProducts(limit) {
        return this.products.slice(0, limit);
    }
    
    getProductById(pid) {
        return this.products.find(product => product.id === pid);
    }
}

module.exports = ProductManager;
