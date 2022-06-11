Webcam.set({
width: 350,
height: 300,
image_format: 'png',
png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach ( '#camera' );



function take_snapshot()
{
Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
});
}




console.log('m15 version', m15.version);
classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/SBJGZrvwm/model.json', modeLoaded);


function modelLoaded() {

console.log('modelLoaded!');
}

function speak() {

var synth = window.speechSynthesis;
speak_data_1 = "The first prediction is" + prediction_1;
speak_data_2 = "And the second prediction is" + prediction_2;
var utterThis = new SpeechSynthesisisUtterance(speak_data_1 + speak_data_2);
synth.speak(utterThis);
}