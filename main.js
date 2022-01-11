var SpeechRecognition = window.webkitSpeechRecognition;
//window.webkitSpeechRecognition = API to understand speech and convert it into text

var recognition = new SpeechRecognition();
//create variable named recognition for the API

function start() {
    document.getElementById("textbox").innerHTML = "";
    //empty the textbox when you click on start
    recognition.start();
    //start the API to convert speech to text
}

recognition.onresult = function (event) {
    //get result from the speech
    console.log(event);
    var Content = event.results[0][0].transcript;
    // display the speech in console
    document.getElementById("textbox").innerHTML = Content;
    //display speech in textbox

    console.log(Content);
    if (Content == "take my selfie") {
        console.log("taking selfie --- ");
        speak();
        //call speak function which you will define below
    }
}




//class 99
//text into speech
function speak() {
    var synth = window.speechSynthesis;
    //different API to convert the text to speech
    speak_data = "Taking your Selfie in 5 seconds";
    //if the text from the text area from HTML
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    //add the speak function above
    Webcam.attach(camera);
    //add the webcam link in HTTML head
    setTimeout(function () {
        take_snapshot();
        //call take snapshot function which you will define below
        save();
        //save the snap shot
    }, 5000);
    //5 sec = 5000 milliseconds
}


camera = document.getElementById("camera");
Webcam.set({
    //set the camera
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
       document.getElementById("result").innerHTML = '<img id = "selfie_image" src="'+data_uri+'">';
    });
}

function save()
{
    link = document.getElementById("link");
 image = document.getElementById("selfie_image").src ;
 link.href = image;
link.click();
}