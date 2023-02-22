class Math  {

    /**
    * add
    * @param {number} a the first number to add
    * @param {number} b the second number to add 
    * @returns {number} the sum of a and b
    */
    add(a, b)   {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('both numbers must be type number')
        }
        return a + b;
    }

    /**
    * sumArr
    * @param {Array<number>} arr the array of numbers to add
    * @param {number} total the total of the sum of arr
    */
    sumArr(arr) {
        let total = 0;
        for(let i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total;
    }

    /**
    * avg
    * @param {Array<number>} arr the array of numbers to average
    * @param {number} prom the average of the array
    */
    avg(arr)    {
        let prom = 0;
        let total = 0;
        for(let i = 0; i < arr.length; i++) {
            total += arr[i];
            prom = total / arr.length
        }
        return prom;
    }

    /**
    * uniques
    * @param {Array<number>} arr the array of numbers to filter
    * @param {Array<number>} arr the array of control
    */
    uniques(arr)   {
        let arr2 = [];
        for(let i = 0; i < arr.length; i++) {
            if(!arr2.includes(arr[i])){
                arr2.push(arr[i]);
            }
        }
        return arr2;
    }
}

module.exports = Math;