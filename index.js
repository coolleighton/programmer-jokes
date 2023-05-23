const jokesList = {}

const instruction = document.getElementById("instruction")
const getJoke = document.getElementById("get-joke")
const joke = document.getElementById("joke")
const showResponse = document.getElementById("show-response")
const response = document.getElementById("response")

function displayText() {
    instruction.classList.add("active")
}
setTimeout(displayText,8000);

function displayBtn() {
    getJoke.classList.add("active")
}
setTimeout(displayBtn,16000);



getJoke.addEventListener("click", function() {
    console.log("clicked")
    jokes()

});


showResponse.addEventListener("click", function() {
    response.classList.add("active")
});


function jokes() {
    fetch (
        "https://official-joke-api.appspot.com/jokes/programming/random"
    )
    .then((response) => response.json())
    .then((data) => {
        
        const {setup} = data[0];
        const {punchline} = data[0];
        const {id} = data[0];
        console.log(id, setup, punchline);

        joke.innerText = setup
        response.innerText = punchline

        joke.classList.add("active")
        joke.classList.add("animation")
        showResponse.classList.add("active")
        response.classList.remove("active")

    });
};



  


