// Defining Product Class.
// Passing parameters in the constructor function.   
// Parameters are then used to initialize the properties of the Object 
// this.propertyName eg. this.price - we assign values to the corresponding obj poropertis.  
class Product {
    constructor(name, price, category, availableStock, size) {
    this.name = name;
    this.price = price;
    this.category = category
    this.avaliableStock = availableStock;
    this.size =size 
    }
}

// Creating objects w/ the constructor 
let item = new Product('Yeezy v3 browns', 5000, 'footwear', 200, "UK6 UK7 UK8 UK9");


// P R A C T I C A L   C H A L L E N G E 
// 1. Create a class with a different entity 

class Order {
    constructor(dateOrdered, totalOrder, deliveryDate) {
        this.dateOrdered = dateOrdered;
        this.totalOrder =totalOrder;
        this.deliveryDate =deliveryDate
    }
}
// 