module scenes {
    export class GameOverScene extends objects.Scene {
         // Variables
         private gameOverLabel : objects.Label;
         private backButton : objects.Button;
 
         // Constructor
         constructor(assetManager: createjs.LoadQueue) {
             super(assetManager);
             this.Start();
         }
         // Methods
         public Start() : void {
             //Initialize objects for a scene
             this.gameOverLabel = new objects.Label("Game Over!", "40px", "Consolas", "#000000", 320, 240, true);
 
             this.backButton = new objects.Button(this.assetManager, "backButton", 320, 400);
             this.Main();
         }
 
         public Update(): void{}
 
         public Main() : void {
             this.addChild(this.gameOverLabel);
             this.addChild(this.backButton);

             // Register for click events
             this.backButton.on("click", this.backButtonClick);
         }

         private backButtonClick() : void {
            // Change from OVER to GAME scene
            objects.Game.currentScene = config.Scene.GAME;
        }
    }
}