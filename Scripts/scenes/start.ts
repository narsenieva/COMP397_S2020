module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private background : objects.Background;
        private welcomeLabel : objects.Label;
        private startButton : objects.Button;

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }
        // Methods
        public Start() : void {
            //Initialize objects for a scene
            this.background = new objects.Background(this.assetManager);
            this.welcomeLabel = new objects.Label("Welcome to School!", "60px", "Consolas", "#FFFFFF", 320, 240, true);

            this.startButton = new objects.Button( this.assetManager, "startButton", 320, 300);
            this.Main();
        }

        public Update(): void{}

        public Main() : void {
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        }

        private startButtonClick() : void {
            // Change from START to GAME scene
            objects.Game.currentScene = config.Scene.GAME;
        }
    }
}