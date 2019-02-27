function flightTimetable(input) {
    let arrivalsOrDepartures = input[0];
    var city = input[1];
    var time = input[2];
    var flightNumber = input[3];
    var gateNumber = input[4];

    console.log(`${arrivalsOrDepartures}: Destination - ${city}, Flight - ${flightNumber}, Time - ${time}, Gate - ${gateNumber}`);

}

flightTimetable(['Departures', 'London', '22:45', 'BR117', '42']);