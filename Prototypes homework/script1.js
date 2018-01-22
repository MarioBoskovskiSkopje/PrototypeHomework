
// With class

class Bus {

    constructor(passengers, color, numberOfTires, numberOfSeats, linenumber) {
        this.linenumber = linenumber || parseFloat(Math.random() * 100).toFixed(0);
        this.passengers = passengers || 60;
        this.color = color || 'Yellow';
        this.numberOfSeats = numberOfSeats || 60;
        this.numberOfTires = numberOfTires || 4;

        this.isMoving = false;
        this.isWorking = false;
        this.isDamaged = false;



    }


    getIsMoving() {
        return this.isMoving;
    }
    getIsWorking() {
        return this.isWorking;
    }
    getIsDamaged() {
        return this.isDamaged ? "The bus is damaged" : "The bus is ready to go";
    }
    getPassengers() {
        let totalPassengers = this.numberOfSeats - this.passengers;
        if (totalPassengers < 60) {
            return totalPassengers + " more passengers can in";
        } else if (totalPassengers > 60) {
            return "Too much passengers";
        }
    }
    getSeats() {
        let totalSeats = this.numberOfSeats - this.passengers;
        if (totalSeats < 60) {
            return "free seats: " + totalSeats;
        } else if (totalSeats > 60) {
            return "full bus";
        }
    }
    getTires() {
        let totalTiers = this.numberOfTires;
        return (totalTiers >= 4) ? "Bus is ready with " + totalTiers : "Bus is not ready with 4 tires";
    }
    getInfo() {
        return this 
        
    }




}

class GreenBus extends Bus {
    constructor(passengers, color, numberOfTires, numberOfSeats, linenumber) {
        super(passengers, color, numberOfTires, numberOfSeats, linenumber);
        this.isMoving = true;
        if (this.isMoving) {
            this.isWorking = true;
        }
    }
}

class YellowBus extends Bus {
    constructor(passengers, color, numberOfTires, numberOfSeats, linenumber) {
        super(passengers, color, numberOfTires, numberOfSeats, linenumber);
        this.isDamaged = true;
        if (this.isDamaged) {
            this.isWorking = false;
            this.isMoving = false;
        }
    }
}

let greenBus = new GreenBus(50, 'green', 6);
let yellowBus = new YellowBus(60, 'yellow', 3);
console.log(greenBus.getInfo());
console.log(yellowBus.getInfo());
