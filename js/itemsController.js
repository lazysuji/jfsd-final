class ItemsController {
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    addItem(name, description, imageUrl) {
        const item = {
            id: this.currentId++,
            name: name,
            description: description,
            imageUrl: imageUrl
        };
        
        this.items.push(item);
        //Save items to local storage
        localStorage.setItem("items", JSON.stringify(this.items));
    }

    loadItemsFromLocalStorage(){
        const storageItems = localStorage.getItem("items");
        if (storageItems) {
            const items = JSON.parse(storageItems);
            for (let i=0; i<items.length; i++) {
                let item = items[i];
                this.items.push(item);
            }
        }
    }

}

// test
// const instance = new ItemController();
// instance.addItem("Cake", "Strawberry","image.png");
// instance.addItem("Cakessss", "Strawberry","image.png");
// console.log(instance);