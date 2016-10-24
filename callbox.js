var result = ask("The password is?", {
    choices: "hotdogs"
});
if(result.value == "hotdogs"){
    say("That is correct!");
    say("https://evolution.voxeo.com/library/audio/prompts/dtmf/Dtmf-9.wav");
    message("A Guest has Arrived", {
        to:"+19194289853",
        network:"SMS"
});
}
else{
    say("there is a nice bench outside for you to sleep on");
}