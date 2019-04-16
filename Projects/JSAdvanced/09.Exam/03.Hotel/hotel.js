class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = (Number(capacity));
        this.bookings = [];
        this.currentBookingNumber = 0;
    };

    get roomsPricing() {
        return {
            single: 50,
            double: 90,
            maisonette: 135
        }
    }

    get servicesPricing() {
        return {
            food: 10,
            drink: 15,
            housekeeping: 25
        }
    }

    get roomCapacity() {
        return {
            single: Math.ceil(this.capacity * 0.50),
            double: Math.ceil(this.capacity * 0.30),
            maisonette: Math.ceil(this.capacity * 0.20)
        }
    }

    rentARoom(clientName, roomType, nights) {
        let result = '';
        if (roomType === 'single' && this.roomCapacity.single < 0 && this.roomCapacity.maisonette > 0 && this.roomCapacity.double > 0) {
            return `No single rooms available! Available double rooms: ${this.roomCapacity.double}. Available maisonette rooms: ${this.roomCapacity.maisonette}.`
        }
        if (roomType === 'single' && this.roomCapacity.single < 0 && this.roomCapacity.maisonette < 0 && this.roomCapacity.double < 0) {
            return `No single rooms available!`
        }
        if (roomType === 'single' && this.roomCapacity.single < 0 && this.roomCapacity.maisonette > 0 && this.roomCapacity.double < 0) {
            return `No single rooms available! Available maisonette rooms: ${this.roomCapacity.maisonette}.`

        }
        if (roomType === 'single' && this.roomCapacity.single > 0 && this.roomCapacity.maisonette < 0 && this.roomCapacity.double < 0) {
            return `No single rooms available! Available double rooms: ${this.roomCapacity.double}.`

        }
        if (roomType === 'single' && this.roomCapacity.single > 0) {
            this.currentBookingNumber++;
            this.capacity--;
            this.roomCapacity.single--;

            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber}.`;

        }
        if (roomType === 'double' && this.roomCapacity.double > 0) {
            this.currentBookingNumber++;
            this.capacity--;
            this.roomCapacity.double--;
            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber}.`
        }
        if (roomType === 'maisonette' && this.roomCapacity.maisonette > 0) {
            this.currentBookingNumber++;
            this.capacity--;
            this.roomCapacity.maisonette--;
            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber}.`;

        }
        this.bookings = [clientName, roomType, nights, this.currentBookingNumber];

    }

    roomService(currentBookingNumber, serviceType) {
        let services = ['food', 'drink', 'housekeeping'];
        services.forEach(function (x) {
            if (serviceType == x){
                `We do not offer ${serviceType} service.`;
            }
            else{
               return `Mr./Mrs. ${clientName}, Your order for {serviceType} service has been successful.`

            }
        });


    }
}

let hotel = new Hotel('HotUni', 10);

hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Robert', 'double', 4);
hotel.rentARoom('Geroge', 'maisonette', 6);

console.log(hotel.roomService(3, 'housekeeping'));
console.log(hotel.roomService(3, 'drink'));
console.log(hotel.roomService(2, 'room'));


