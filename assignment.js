// feetToMile
/**this function takes the number of 
 * feet and returns the number of mile.*/
function feetToMile(feet) {
    if (feet < 0) {
        return "Distance can't be a negative number";
    }
    var mile = feet / 5280; // 1 mile = 5280 feet
    return mile;
}


// woodCalculator
/** this function takes 3 agruments as 
 * chair, table and bed then it calculates 
 * how many cubic foot wood needed.*/
function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        return "Number of chair, table or bed can't be a negative number."
    }
    else {
        // chair, table and bed needs 1, 3 and 5 cubic feet wood respectively.
        var wood = chair * 1 + table * 3 + bed * 5;
        return wood;
    }
}


// brickCalculator
/**this function takes the number of storeys
 * in a building and returns the number of
 * bricks in that building. */
function brickCalculator(storey) {
    var feet = 0;
    if (storey < 0) {
        return "Storey number can't be a negative number"
    }
    else if (storey <= 10) {
        feet += storey * 15; // 1st 10 storeys = 15 feet.
    }
    else if (storey > 10 && storey <= 20) {
        storey -= 10;
        feet += 10 * 15 + storey * 12; // 2nd 10 storeys = 12 feet.
    }
    else if (storey > 20) {
        storey -= 20;
        feet += 10 * 15 + 10 * 12 + storey * 10; // storeys getter than 20 = 10 feet.
    }
    var bricks = feet * 1000; // 1000 bricks per foot.
    return bricks;
}


// tinyFriend
/**this function takes an array of some names
 * and returns the smallest name among them.*/
function tinyFriend(friends) {
    if (friends.length == 0) {
        return "Array can't be empty."
    }
    var name = friends[0];
    for (var i = 0; i < friends.length; i++) {
        var element = friends[i] // element is the name of friend for each iteration.
        if (element.length < name.length) {
            name = element;
        }
    }
    return name;
}
