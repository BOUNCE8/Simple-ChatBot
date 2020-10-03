document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input")
    inputField.addEventListener("keydown", function(e){
        if(e.code === "Enter"){
        let input = inputField.value;
        // Clears the value after pressing "Enter"
        inputField.value = "";
        output(input);
        }
    });
});

//Selects a random response from the bot response array that matches the index from the user input array. 
function chatResponse(inputArray, outputArray, inputFilter) {
    let item;
    for(let i = 0; i < inputArray.length; i++){
        for (let y = 0; y < outputArray.length; j++){
            if(inputArray[i][j] == inputFilter){
                items = outputArray[i];
                
                item = items[Math.floor(Math.random() * items.length)];
            }
        }
    }
    return item
}

function output(input){
    // regular expression that removes everything apart from word character, space & numbers.
    let inputFilter = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

    let result;

    if(chatResponse(triggerInputs, triggerOutputs, inputFilter)){
        result = chatResponse(triggerInput, triggerOutput, inputFilter);
    } else {
        result = altTriggerOutputs[Math.floor(Math.random() * altTriggerOutputs.length)]
    }

    //DOM updated here
    addConvo(input, result);
}

const triggerInputs = [
    ["hi", "yo", "hello", "yo"],
    ["how are you", "how are you doing"],
    ["what is up", "what is going on", "what are you doing"]
    ["not too bad", "i am good thanks", "great"],
    ["not great", "tired", "bored"],
    ["tell me a fact", "tell me something interesting"],
    ["thank you", "thanks", "no problem"],
    ["bye", "goodbye", "good bye", ]
];

const triggerOutputs = [
    ["Hello", "Hey", "Hi there!", "what's good"],
    ["Not bad thanks, how are you doing?", "great, how are you feeling?", "Amazing, what about you?"],
    ["Not much", "So much I can't remember", "working on projects"],
    ["That's good", "Good to hear", "Great"],
    ["Sorry to hear that", "That's a shame"],
    ["People are crazy"],
    ["No problem", "Pleasure is mine", "You're welcome"],
    ["Take care", "Goodbye", "See you later"]
];

const altTriggerOutputs = [
    "Interesting",
    "I'm listening",
    "Tell me more",
    "That's Tricky",
    "Oh yeee"
]

