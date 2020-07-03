// Imidiate Invoked Anonymous Function

(function() {
    // Global Game Variables

    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;

    //let helloLabel: createjs.Text;
    let helloLabel: objects.Label;
    let clickMeButton: objects.Button;

    function Init(){
        console.log("Initializing Start");
        Start();
    }

    function Start() {
        console.log("Starting Application...");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);

        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }

    function Update() {
        stage.update();

        // Movement here
        //helloLabel.scaleX += 0.001;
        //helloLabel.scaleY += 0.001;
        //helloLabel.rotation += 5;
    }

    function clickMeButtonClicked() : void {
        helloLabel.text = "Clicked";
        console.log("I am clicked");
    }

    function Main() {
        console.log("Game Start");
        //helloLabel = new createjs.Text("Hello World!", "40 px Consolas", "#000000");
        helloLabel = new objects.Label("Hello Class!", "40px", "Consolas", "#000000", 320, 240, true);
        //helloLabel.x = 100;
        //helloLabel.y = 100;

        clickMeButton = new objects.Button("./Assets/button.png", 320, 340);
        clickMeButton.regY = 50;
        clickMeButton.regX = 50;
        clickMeButton.on("click", clickMeButtonClicked);

        stage.addChild(helloLabel);
        stage.addChild(clickMeButton);
    }

    window.onload = Init;
})();