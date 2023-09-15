// CALLBACKS & ASYNC

function growCorn() {
    //takes an arrow function & number in milliseconds
    setTimeout(() => {
        console.log("Corn has finished growing!")
    }, 3000)
}

function pickApple() {
    console.log("Apple picked!")
}

//the calls are out of order if you run this
// console.log("Corn has started growing");
// growCorn();
// pickApple();

//PROMISES
const httpRequest = {
    successCode: Math.random(),
    resolvedData: "Here is some good data",
    rejectedData: "This is bad data"
}

console.log("success code: ", httpRequest.successCode.toFixed(2))

//using the new promise
function handlePromiseWithoutAsync() {
    const httpRequestPromise = new Promise((resolve, reject) => {
        if(httpRequest.successCode < 0.5) {
            resolve(httpRequest.resolvedData);
        } else {
            reject(httpRequest.rejectedData);
        }
    })

    httpRequestPromise
    .then((resolvedData) => {
        console.log("Promise was resolved: ", resolvedData)
    })
    .catch((rejectedData) => {
        console.error("Promise was rejected: ", rejectedData)
    })
    .finally(() => {
        console.log("Promise complete.")
    })
}

//using async/await
async function handlePromiseWithAsync() {
    try {
        const data = await httpRequestPromise;
        console.log("The data was good! ", data);
    } catch(err) {
        console.log("There was an error: ", err);
    } finally {
        console.log("Promise is complete, with async/await")
    }
}

// handlePromiseWithAsync()

//json placeholder
async function fetchJsonData() {
    try {
        console.time("async Call")
        const jsonData = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const response = await jsonData.json();
        // console.log("Data fetched from the server as JSON: ",jsonData)
        console.log("Data fetched from the server as usable data: ", response)
        console.log("Post title: ", response.title)
        console.timeEnd("async Call")
    } catch(err) {
        console.warn("There was an error: ", err);
    } finally {
        console.log("Request finished.")
    }
}

//this will error out if you run it
function fetchJsonDataWithoutAsync() {
    try {
        const jsonData = fetch('https://jsonplaceholder.typicode.com/posts/1');
        const response = jsonData.json();
        // console.log("Data fetched from the server as JSON: ",jsonData)
        console.log("Data fetched from the server as usable data: ", response)
        console.log("Post title: ", response.title)
    } catch(err) {
        console.warn("There was an error: ", err);
    } finally {
        console.log("Request finished.")
    }
}

fetchJsonData();
