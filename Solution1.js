/*
    A cinema has n rows of seats , there are 10 seats in each row. 
    Given an array of reservedSeats 
    return the maximum number of four-person families  you can stil accomadate

    CONSTRAINTS~~
    A four person family has to be in
        ONE ROW
            IF AISLE 
            2 ON EACH SIDE
*/

const cinemaBookingSearch = (n, reservedSeats) => {
	let maxFourPersonFamilies = null;

	if (n != null && reservedSeats.length > 0) {
		let maxInRow = null;
		//if rows are provided, and if there are reserved seats, then go here
		//Create an array with n arrays inside,
		// work with bits at the reserved seat add a 1 for taken inside the row ,
		//add 0 as the index for un reserved seats
		// conditional if 0 index is repeated 4 times after the other then add it to maxInRow plus the prev result
		//set maxFourpersonFamilies to maxinRow
	} else if (n != null && reservedSeats.length === 0) {
		//If rows are provided, and reservedSeats array is empty
		//then get the number of available seats by mulitplying row and the 10 seats
		//Math Floor works good here because the length of reservedSeats wont be a negative numeber

		let availableSeats = n * 10;
		//Setting available seats to the sum of row, and seats available per row.
		maxFourPersonFamilies = Math.floor(availableSeats / 4);
	} else {
		return;
	}

	return maxFourPersonFamilies;
};

const reservedSeats1 = [
	[1, 2],
	[1, 3],
	[1, 8],
	[2, 6],
	[3, 1],
	[3, 10],
];
const reservedSeats2 = [];
console.log(cinemaBookingSearch(2, reservedSeats1));
console.log(cinemaBookingSearch(3, reservedSeats2));
console.log(cinemaBookingSearch(0, []));
