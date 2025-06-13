let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "in-GB"; // Hindi accent (British); can be changed to "en-US" etc.
    window.speechSynthesis.speak(text_speak);
}

function wishme() {
    let day = new Date(); // Fixed: 'Date' should be capitalized
    let hours = day.getHours(); // Fixed: 'getHours' is a function, so use ()
    console.log(hours);
    if (hours >= 0 && hours < 12) {
        speak("Good morning sir");
    } else if (hours >= 12 && hours < 16) { // Fixed: '4' should be '16' (4 PM)
        speak("Good afternoon sir");
    } else {
        speak("Good evening sir");
    }
}

window.addEventListener('load', () => {
    wishme()
})
let speechRecognition = window.SpeechRecognitionResult || window.webkitSpeechRecognition
let recognition = new speechRecognition();
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    console.log('Recognized speech:', transcript);
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display = "none";
    voice.style.display = "block";

})
function takeCommand(message) {
    btn.style.display = "flex";
    voice.style.display = "none";
    if (message.toLowerCase().includes("hi devil") || message.toLowerCase().includes("hello") || message.toLowerCase().includes("hello devil")) {
        speak("Hello sir, what can I help you with?");
    }
    else if (message.toLowerCase().includes("how are you?")) {
        speak("I'm fine,Im your virtual assistant,created by tanveer sir");
    } else if (message.toLowerCase().includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://www.youtube.com/", "_blank");
    } else if (message.toLowerCase().includes("open facebook")) {
        speak("Opening Facebook...");
        window.open("https://www.facebook.com/", "_blank");
    }
    else if (message.toLowerCase().includes("open instagram")) {
        speak("Opening Instagram...");
        window.open("https://www.instagram.com/", "_blank");
    }
    else if (message.toLowerCase().includes("open whatsapp")) {
        speak("Opening Whatsapp...");
        window.open("https://www.whatsapp.com/", "_blank");
    }
    else if (message.toLowerCase().includes("open movies")) {
        speak("Opening Movies...");
        window.open("https://moviebox.ng/", "_blank");
    }
 else if (message.toLowerCase().includes("open drama")) {
        speak("Opening Drama...");
        window.open("https://www.youtube.com/results?search_query=man+mast+malang", "_blank");
    }

    else if (message.toLowerCase().includes("open calculator")) {
        speak("Opening Calculator...");
        window.open("calculator://");

    }

    else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(time);
    }


    else if (message.includes("Date")) {
        let Date = new Date().toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
        speak(Date);
    }

    else {
        let finaltext = "this is what i found on internet regarding" + message.replace("devil", "") || message.replace("davil", "")
        speak(finaltext)
        window.open(`https://www.google.com/search?q=${message.replace("devil", "")}`, "_blank")
    }



}



