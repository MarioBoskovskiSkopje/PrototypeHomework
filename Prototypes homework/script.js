	function Bus(passengers, color, numberOfTires, numberOfSeats, linenumber) {
		this.linenumber = linenumber || parseFloat(Math.random() * 100).toFixed(0);
		this.passengers = passengers || 60;
		this.color = color || 'Yellow';
		this.numberOfSeats = numberOfSeats || 50;
		this.numberOfTires = numberOfTires || 4;



		this.isMoving = false;
		this.isWorking = false;
		this.isDamaged = false;


	}
	Bus.prototype.getIsMoving = function () {
		return this.isMoving;
	}

	Bus.prototype.getIsWorking = function () {
		return this.isWorking;
	}

	Bus.prototype.getIsDamaged = function () {
		return this.isDamaged ? "The bus is damaged" : "The bus is ready to go";

	}
	Bus.prototype.getSeats = function () {
		let totalSeats = this.numberOfSeats - this.passengers;
		return (totalSeats === 0) ? "full bus" : "There are: " + totalSeats + " free seats";
	}


	function GreenBus(passengers, color, numberOfTires, numberOfSeats, linenumber) {
		this._super(passengers, color, numberOfTires, numberOfSeats, linenumber)
		this.isMoving = true;
		if (this.isMoving) {
			this.isWorking = true;

		}
	}
	GreenBus.prototype = Object.create(Bus.prototype);
	GreenBus.prototype.constructor = GreenBus;
	GreenBus.prototype._super = Bus;

	function YellowBus(passengers, color, numberOfTires, numberOfSeats, linenumber) {
		this._super(passengers, color, numberOfTires, numberOfSeats, linenumber)
		this.isDamaged = true;
		if (this.isDamaged) {
			this.isWorking = false;
			this.isMoving = false;
		}
	}
	YellowBus.prototype = Object.create(Bus.prototype);
	YellowBus.prototype.constructor = YellowBus;
	YellowBus.prototype._super = Bus;


	Bus.prototype.getInfo = function () {
		return {
			info: this,
			getIsMoving: this.getIsMoving(),
			getIsWorking: this.getIsWorking(),
			getSeats: this.getSeats(),
			checkStatus: this.getIsDamaged()
		}
	}
	let greenBus = new GreenBus(35,'green', 4, 35, 24);
	let yellowBus = new YellowBus(45, 'yellow', 6, 35, 57);
	console.log(greenBus.getInfo());
	console.log(yellowBus.getInfo());