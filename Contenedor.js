const fs = require('fs');

class Contenedor {

    async save(product) {
        try {
            await fs.promises.appendFile('./Products.txt', JSON.stringify(product));
            console.log('Producto agregado');
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id) {
        try {
            const products = JSON.parse(await fs.promises.readFile('./Products.txt', 'utf-8'));
            const productID = products.find(productID => productID.id === id);
            if (productID) {
                console.log(productID);
            } else {
                console.log('El ID ingresado no corresponde con ningun producto');
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            const products = JSON.parse(await fs.promises.readFile('./Products.txt', 'utf-8'));
            console.log(products);
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(id) {
        try {
            const products = JSON.parse(await fs.promises.readFile('./Products.txt', 'utf-8'));
            const productID = products.filter(productID => productID.id !== id);
            await fs.promises.writeFile('./Products.txt', JSON.stringify(productID), 'utf-8');
            console.log('Producto eliminado con éxito');
        }
        catch (error) {
            console.log(error);
        }

    }

    async delete() {
        try {
            await fs.promises.unlink('./Products.txt')
        } catch (error) {
            console.log(error);
        }
    }
}

const products = [{
    title: 'Tenis',
    price: 2500,
    thumbnail: 'https:fshopx.tk/ProductDetail.aspx?iid=239578453&pr=50.88',
    id: 1
},
{
    title: 'Tenis',
    price: 3500,
    thumbnail: 'https://fshopx.tk/ProductDetail.aspx?iid=239578741&pr=51.88',
    id: 2

},
{
    title: 'Tenis',
    price: 2700,
    thumbnail: 'https://fshopx.tk/ProductDetail.aspx?iid=239578862&pr=53.88',
    id: 3

},
{
    title: 'Tenis',
    price: 12300,
    thumbnail: 'https://fshopx.tk/ProductDetail.aspx?iid=239578927&pr=52.88',
    id: 4

},
{
    title: 'Tenis',
    price: 4500,
    thumbnail: 'https://fshopx.tk/ProductDetail.aspx?iid=239578879&pr=53.88',
    id: 5
}]


product = new Contenedor();
product.save(products);
product.getAll();
product.getById(4)
product.deleteById(2)
product.getAll();
product.delete();
product.getAll();

