/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let record = [];
    let popped = null;
    while (operations.length > 0) {
        let op = operations.shift(); // take from front (FIFO)
        
        switch (op) { //Check cases
            case "C": // Invalidate the previous score, removing it from the record.
                record.pop();
                break;

            case "D": // Record a new score that is the double of the previous score.
                record.push(2 * record[record.length - 1]);
                break;

            case "+": // Record a new score that is the sum of the previous two scores.
                let last = record[record.length - 1];
                let secondLast = record[record.length - 2];
                record.push(last + secondLast);
                break;

            default: // Integer, record a new score
                record.push(parseInt(op));
        }
    }

    //Operations finished, let's sum the records
    let sum = 0;
    while (record.length > 0) {
        sum += record.pop();
    }
    return sum;
};