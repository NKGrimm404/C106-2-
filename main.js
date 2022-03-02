function StartClassification(){
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier=ml5.soundClassifer('https://teachablemachine.withgoogle.com/models/2xADWRRmp/.json',modelReady)
}
function modelReady(){
    classfier.classify(gotResults);
}
function gotResults(error,results){
if(error){
console.error(error);
}
else{
    console.log("model working");
}
}
