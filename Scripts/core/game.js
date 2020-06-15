// Imidiate Invoked Anonymous Function
(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    function Init() {
        console.log("Initializing Start");
        Start();
    }
    function Start() {
        console.log("Starting Application...");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        stage.update();
        // Movement here
        helloLabel.scaleX += 0.001;
        helloLabel.scaleY += 0.001;
    }
    function Main() {
        console.log("Game Start");
        helloLabel = new createjs.Text("Hello World!", "40 px Consolas", "#000000");
        helloLabel.x = 100;
        helloLabel.y = 100;
        stage.addChild(helloLabel);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map