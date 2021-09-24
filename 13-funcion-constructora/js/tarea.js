/*
Práctica:

Generar una colección de Objetos de tipo Product que tenga las siguientes propiedades:
    nombre
    description
    precio de costo
    clasificación
    porcentaje de Ganancia
    precio de venta
    precios de los ultimos 6 meses en una colección [23, 12, 45, 56, 12, 10]
    Cantidad vendidas en la ultima semana
    Fecha de caducidad

🌌 De igual forma es necesario realizar lo siguientes calculos por cada Producto:

- Calcular el precio de Venta y asignarlo a su correspondiente propiedad
- Obtener los diás restantes para que caduque el producto
- Obtener el promedio de precio de los ultimos 6 meses

🌌 Una vez obtenido la colección de Productos obtener lo siguiente:

- Los productos que tengan mayor a 50 cantidades vendidas en la ultima semana
- Los productos que tengan menor a 10 cantidades vendidas en la ultima semana
- Los productos que se encuentren a menos de 15 dias proximas a caducar
Happy Kodig 🚀
*/

function Product ({name, description, costPrice, classification, gainpercentageGain, salePrice, pricesLast6Months, quantitySoldLastWeek, dateExpiry}) {
    this.name = name;
    this.description = description;
    this.costPrice = costPrice;
    this.classification = classification;
    this.percentageGain = percentageGain;
    this.salePrice = undefined;
    this.pricesLast6Months = pricesLast6Months;
    this.quantitySoldLastWeek = quantitySoldLastWeek;
    this.dateExpiry = dateExpiry;
}
Product.prototype.salePriceFunction = function () {
    return {...this, salePrice: this.costPrice + (this.costPrice * this.percentageGain)}
}
Product.prototype.expiryDays = function () {
    const dateExpiry = new Date(this.dateExpiry); 
    const today = new Date();

    return Math.abs(today - dateExpiry) /( 1000 * 3600 * 24);
}
Product.prototype.averagePriceLast6Months = function () {
    return this.pricesLast6Months.reduce((accum, price) => accum + price, 0) / this.pricesLast6Months.length;
}

let soldGreaterThan = (arrProducts, amount) => arrProducts.filter(product => product.quantitySoldLastWeek > amount);
let soldLessThan = (arrProducts, amount) => arrProducts.filter(product => product.quantitySoldLastWeek < amount);
let daysOfExpiration = (arrProducts, amount) => arrProducts.filter(product => product.expiryDays() < amount);