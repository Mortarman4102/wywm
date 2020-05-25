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
        //if rows are provided, and if there are reserved seats, then go here
        const seatRowMap = reservedSeats.reduce((map, [row, col]) => {
            if (map.has(row)) {
                map.get(row).push(col);
            } else {
                map.set(row, [col]);
            }
            return map;
        }, new Map());

        const 

        
    } else if (n != null && reservedSeats.length === 0) {

        //If rows are provided, and reservedSeats array is empty 
        //then get the number of available seats by mulitplying row and the 10 seats
        //Math Floor works good here because the length of reservedSeats wont be a negative numeber

        let availableSeats = n * 10;
        //Setting available seats to the sum of row, and seats available per row.
        maxFourPersonFamilies = Math.floor(availableSeats/4)

    } else {
        return;
    }
    
    return maxFourPersonFamilies;
}