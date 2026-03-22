const foxButton = document.querySelector("#fox-button")
foxButton.addEventListener("click", () => {
    fetch("https://randomfox.ca/floof/") //returns a Promise 
    .then((response) => { //server response from Promise gets passed into .then() as the response parameter. response is an object containing info from the server including the actual data - raw text/JSON
        // This code runs when the Promise is fulfilled
        console.log('Response received!');
        // Parse the JSON in the response aka covert text into a JS object you can use;
        return response.json(); //passes new Promise to the next .then()
    })
    //Once Promise resolves, the now JS object gets passed in as foxData.
    .then((foxData) => {
        //This code runs when the JSON parsing is complete
        console.log('Data parsed!');
        console.log(foxData);
        const foxImage = document.querySelector("#fox")
        //src is built in property of <img> element. 
        // This takes the image URL from thr API data and puts it into the <img> elements src attribute, telling the browser what image to display.
        foxImage.src = foxData.image
    });
})

console.log('This code runs immediately!');


// const dogButton = document.querySelector("#dog-button")
// dogButton.addEventListener("click", () => {
//     fetch("https://random.dog/woof.json")
//     .then((response) => {
//         return response.json();
//     })
//     .then((dogData) => {
//         const dogImage = document.querySelector("#dog")
//         dogImage.src = dogData.url
//     });
// })

const displayDogImage =  async () => {
    const response = await fetch("https://random.dog/woof.json")
    const dogData = await response.json()
    const dogImage = document.querySelector("#dog")
    dogImage.src = dogData.url
}
const dogButton = document.querySelector("#dog-button")
dogButton.addEventListener("click", displayDogImage)