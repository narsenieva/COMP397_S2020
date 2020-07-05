module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private playLabel: objects.Label;
        private nextButton: objects.Button;
        private backButton: objects.Button;
        private background: objects.Background;
        private player:objects.Player;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        public Start():void {
            console.log("Play scene start");
            // Inintialize our variables
            this.playLabel = new objects.Label( "Game Playing", "40px", "Consolas", "#000000", 320, 240, true);
            this.nextButton = new objects.Button(this.assetManager, "nextButton", 500, 340);
            this.backButton = new objects.Button(this.assetManager, "backButton", 100, 340);
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);

            this.Main();
        }

        public Update():void {
            this.background.Update();
            this.player.Update();
        }

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.playLabel);
            this.addChild(this.player);
            this.addChild(this.nextButton);
            this.addChild(this.backButton);

            // Register for click events
            this.nextButton.on("click", this.nextButtonClick);
            this.backButton.on("click", this.backButtonClick);
        }

        private nextButtonClick():void {
            objects.Game.currentScene = config.Scene.OVER;
        }

        private backButtonClick():void {
            objects.Game.currentScene = config.Scene.START;
        }
    }
}