let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voicePic")


function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1 
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    if(hours >= 0 && hours < 12){
        speak("Good Morning Sir")
    } else if(hours>=12 && hours<16 ){
        speak("Good Afternoon Sir")
    } else {
        speak("Good Afternoon sir")
    }
}
// window.addEventListener('load', ()=>{
//     wishMe()
// })


let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerHTML=transcript
    // console.log(event)
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message){
    btn.style.display="block"
    voice.style.display="none"
    if(message.includes("how are you")){
        speak("i am Fine, and you")
    }
    else if (message.includes("hello") || message.includes("hi")){
        speak("Hi sir, my name shahnyi")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant, created by Walid shah")
    }
    else if(message.includes("what can you do")){
        speak("I can answer your questions, tell you the time, and assist you with tasks.");
    }
    else if(message.includes("thank you")){
        speak("You're welcome!");
    }
    else if (message.includes("thank you")) {
        speak("You're welcome!");
    }
    else if (message.includes("good morning")) {
        speak("Good morning! Have a great day ahead.");
    }
    else if (message.includes("good night")) {
        speak("Good night! Sweet dreams.");
    }
    else if (message.includes("who made you")) {
        speak("I was created by Walid Shah.");
    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }    
    else if(message.includes("open whatsapp")){
        speak("opening Whatsapp")
        window.open("whatsapp://")
    }   
    else if (message.includes("open facebook")) {
    speak("Sure, opening Facebook.");
    window.open("https://www.facebook.com", "_blank");
    }
    else if(message.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric", minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric", month:'long', year:"numeric"})
        speak("today date " + date)
    }
    else if(message.includes("bye")){
        speak("Goodbye! Have a great day!");
    }
    else{
        speak(`this is what i found on internet regarding ${message}`)
        window.open(`https://www.google.com/search?q=${message}`)
    }
} 