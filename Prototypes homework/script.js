	function Bus(passengers, color, numberOfTires, numberOfSeats, linenumber) {
		this.linenumber = linenumber || parseFloat(Math.random() * 100).toFixed(0);
		this.passengers = passengers || 60;
		this.color = color || 'Yellow';
		this.numberOfSeats = numberOfSeats || 60;
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
	Bus.prototype.getPassengers = function () {
		let totalPassengers = this.numberOfSeats - this.passengers;
		if (totalPassengers < 60) {
			return totalPassengers + " more passengers can in";
		} else if (totalPassengers > 60) {
			return "Too much passengers";
		}

	}
	Bus.prototype.getSeats = function () {
		let totalSeats = this.numberOfSeats - this.passengers;
		if (totalSeats < 60) {
			return "free seats: " + totalSeats;
		} else if (totalSeats > 60) {
			return "full bus";
		}

	}
	Bus.prototype.getTires = function () {
		let totalTiers = this.numberOfTires;
		return (totalTiers >= 4) ? "Bus is ready with " + totalTiers : "Bus is not ready with 4 tires";
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
			checkStatus: this.getIsDamaged(),
			getTires: this.getTires(),
			getPassengers: this.getPassengers()
		}
	}
	let greenBus = new GreenBus(50, 'green', 6);
	let yellowBus = new YellowBus(60, 'yellow', 3);
	console.log(greenBus.getInfo());
	console.log(yellowBus.getInfo());
