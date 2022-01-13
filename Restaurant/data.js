var TableList = [
    { id: 1, name: "Table-1", noOfItems: 0, items: [], TotalBill: 0 },
    { id: 2, name: "Table-2", noOfItems: 0, items: [], TotalBill: 0 },
    { id: 3, name: "Table-3", noOfItems: 0, items: [], TotalBill: 0 }
];

localStorage.clear();
localStorage.setItem('Table-1',JSON.stringify([{'item':"Tomato Soup",'cost':125,'quantity':0},{'item':"Chicken Soup",'cost':170,'quantity':0},{'item':"Corn Soup",'cost':125,'quantity':0},{'item':"Chicken Biryani",'cost':125,'quantity':0},{'item':"Special Veg Biryani",'cost':170,'quantity':0},{'item':"Mutton Biryani",'cost':125,'quantity':0},{'item':"Vanilla",'cost':125,'quantity':0},{'item':"Butter Scotch",'cost':170,'quantity':0},{'item':"Chocolate",'cost':125,'quantity':0},{'item':"Noodles",'cost':125,'quantity':0},{'item':"Fried Rice",'cost':170,'quantity':0},{'item':"Dumplings",'cost':125,'quantity':0},{'item':"Wine",'cost':1000,'quantity':0},{'item':"Cool Drinks",'cost':50,'quantity':0},{'item':"Lemonade",'cost':35,'quantity':0}]));
localStorage.setItem('Table-2',JSON.stringify([{'item':"Tomato Soup",'cost':125,'quantity':0},{'item':"Chicken Soup",'cost':170,'quantity':0},{'item':"Corn Soup",'cost':125,'quantity':0},{'item':"Chicken Biryani",'cost':125,'quantity':0},{'item':"Special Veg Biryani",'cost':170,'quantity':0},{'item':"Mutton Biryani",'cost':125,'quantity':0},{'item':"Vanilla",'cost':125,'quantity':0},{'item':"Butter Scotch",'cost':170,'quantity':0},{'item':"Chocolate",'cost':125,'quantity':0},{'item':"Noodles",'cost':125,'quantity':0},{'item':"Fried Rice",'cost':170,'quantity':0},{'item':"Dumplings",'cost':125,'quantity':0},{'item':"Wine",'cost':1000,'quantity':0},{'item':"Cool Drinks",'cost':50,'quantity':0},{'item':"Lemonade",'cost':35,'quantity':0}]));
localStorage.setItem('Table-3',JSON.stringify([{'item':"Tomato Soup",'cost':125,'quantity':0},{'item':"Chicken Soup",'cost':170,'quantity':0},{'item':"Corn Soup",'cost':125,'quantity':0},{'item':"Chicken Biryani",'cost':125,'quantity':0},{'item':"Special Veg Biryani",'cost':170,'quantity':0},{'item':"Mutton Biryani",'cost':125,'quantity':0},{'item':"Vanilla",'cost':125,'quantity':0},{'item':"Butter Scotch",'cost':170,'quantity':0},{'item':"Chocolate",'cost':125,'quantity':0},{'item':"Noodles",'cost':125,'quantity':0},{'item':"Fried Rice",'cost':170,'quantity':0},{'item':"Dumplings",'cost':125,'quantity':0},{'item':"Wine",'cost':1000,'quantity':0},{'item':"Cool Drinks",'cost':50,'quantity':0},{'item':"Lemonade",'cost':35,'quantity':0}]));

var MenuList = [
    
    { id: 1, item_name: "Tomato Soup", cost: 125, category: "starter soup" },
    { id: 2, item_name: "Chicken Soup", cost: 170, category: "starter soup" },
    { id: 3, item_name: "Corn Soup", cost: 125, category: "starter soup" },
    { id: 4, item_name: "Noodles", cost: 125, category: "Chinese starter" },
    { id: 5, item_name: "Manchuria", cost: 125, category: "Chinese starter" },
    { id: 6, item_name: "Paneer Tikka", cost: 125, category: " starter" },
    { id: 7, item_name: "Special Veg Biryani", cost: 170, category: "main biryani" },
    { id: 8, item_name: "Mutton Biryani", cost: 125, category: "biryani main" },
    { id: 9, item_name: "Chicken Biryani", cost: 125, category: "main biryani" },
    { id: 10, item_name: "Butter Naan", cost: 35, category: "main bread" },
    { id: 11, item_name: "Fried rice", cost: 170, category: "Chinese Main" },
    { id: 12, item_name: "Dumplings", cost: 125, category: "Chinese" },
    { id: 13, item_name: "Vanilla", cost: 125, category: "dessert icecream" },
    { id: 14, item_name: "Butter Scotch", cost: 170, category: "dessert icecream" },
    { id: 15, item_name: "Chocolate", cost: 125, category: "dessert icecream" },
    { id: 16, item_name: "Wine", cost: 1000, category: "beverages" },
    { id: 17, item_name: "Sprite", cost: 50, category: "beverages" },
    { id: 18, item_name: "Lemonade", cost: 35, category: "beverages" }
];
