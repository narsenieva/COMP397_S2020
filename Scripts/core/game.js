// Imidiate Invoked Anonymous Function
(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    //let helloLabel: createjs.Text;
    var helloLabel;
    var clickMeButton;
    var assetManager;
    var assetManifest;
    assetManifest = [
        { id: "clickMeButton", src: "./Assets/button.png" }
    ];
    function Init() {
        console.log("Initializing Start");
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
        //Start();
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
    function clickMeButtonClicked() {
        helloLabel.text = "Clicked";
        console.log("I am clicked");
    }
    function Main() {
        console.log("Game Start");
        //helloLabel = new createjs.Text("Hello World!", "40 px Consolas", "#000000");
        helloLabel = new objects.Label("Hello Class!", "40px", "Consolas", "#000000", 320, 240, true);
        //helloLabel.x = 100;
        //helloLabel.y = 100;
        clickMeButton = new objects.Button(assetManager, "clickMeButton", 320, 340);
        clickMeButton.regY = 50;
        clickMeButton.regX = 50;
        clickMeButton.on("click", clickMeButtonClicked);
        stage.addChild(helloLabel);
        stage.addChild(clickMeButton);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map