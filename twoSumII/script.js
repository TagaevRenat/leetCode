var twoSum = function (numbers, target) {
    let sortedNums = []
    for (let i = 0; i < numbers.length; i++) {
        if (sortedNums.includes(numbers[i])) {
            continue
        }
        else {
            sortedNums.push(numbers[i])
        }
    }
    for (let i = 0; i < sortedNums.length; i++) {
        let result = target - sortedNums[i]
        if (numbers.includes(result) && numbers.indexOf(sortedNums[i]) !== numbers.indexOf(result)) {
            let array = [numbers.indexOf(result) + 1, (numbers.indexOf(sortedNums[i])) + 1]
            array.sort((a, b) => a - b)
            return array
        }
        if ((numbers.includes(result) && numbers.indexOf(result) == numbers.indexOf(sortedNums[i]))) {
            if (numbers.includes((result), ((numbers.indexOf(sortedNums[i]))) + 1)) {
                let array = [numbers.indexOf(result) + 1, ((numbers.indexOf(sortedNums[i]) + 1)) + 1]
                array.sort((a, b) => a - b)
                console.log(numbers.indexOf(sortedNums[i]) + 1)
                return array
            }
        }
        else {
            continue
        }
    };
}
console.log(twoSum([0, 2, 2, 1], 4))

