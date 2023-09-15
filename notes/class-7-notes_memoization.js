//MEMOIZATION
function memoizedFibonacci(n, memo) {
    console.log(`memo when n is ${n}: `, memo)
    // Memoization Initialization
    memo = memo || {} 

    // Call from the cache
    if(memo[n]) {
        console.log("Returning the memoized result: ", memo[n])
        return memo[n]
    }

    // Base case
    if(n <= 2) {
        console.log("Returning the base case: ")
        return 1;
    }

    // recursive function!!!!
    return (memo[n] = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo));
}

const tenthFibNum = memoizedFibonacci(10);
console.log("Tenth Number: ", tenthFibNum);