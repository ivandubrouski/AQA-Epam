class Animal {
    constructor(name, ownerName) {
        this.name = name;
        this.ownerName = ownerName;
    }
    move(){
        console.log('It moved');
    }
}


class Cat extends Animal {
    constructor(name, ownerName) {
        super(name, ownerName)
    }
}

const barsik = new Cat('Barsik', 'Lena');
barsik.move(); // It moved