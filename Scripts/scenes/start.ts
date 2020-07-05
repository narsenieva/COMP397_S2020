module scenes {
    export class StartScene extends objects.Scene {
        // Variables
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
            this.welcomeLabel = new objects.Label("Welcome to School!", "60px", "Consolas", "#000000", 320, 240, true);

            this.startButton = new objects.Button( this.assetManager, "startButton", 320, 300);
            this.Main();
        }

        public Update(): void{}

        public Main() : void {
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