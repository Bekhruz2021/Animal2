function startClassification()
{
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vz_hrZ8ho/model.json', modelReady);
}
function modelReady(){
classifier.classify(gotResults);
}