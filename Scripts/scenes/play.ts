module scenes {
    export class PlayScene extends objects.Scene {
         // Variables
         private playLabel : objects.Label;
         private nextButton : objects.Button;
         private backButton : objects.Button;
 
         // Constructor
         constructor(assetManager: createjs.LoadQueue) {
             super(assetManager);
             this.Start();
         }
         // Methods
         public Start() : void {
             //Initialize objects for a scene
             this.playLabel = new objects.Label("Game Playing!", "40px", "Consolas", "#000000", 320, 240, true);
 
             this.nextButton = new objects.Button( this.assetManager, "nextButton", 500, 340);
             this.backButton = new objects.Button( this.assetManager, "backButton", 100, 340);
             this.Main();
         }
 
         public Update(): void{}
 
         public Main() : void {
             this.addChild(this.playLabel);
             this.addChild(this.nextButton);
             this.addChild(this.backButton);

             // Register for click events
             this.nextButton.on("click", this.nextButtonClick);
             this.backButton.on("click", this.backButtonClick);
         }
 
         private nextButtonClick() : void {
             // Change from GAME to OVER scene
             objects.Game.currentScene = config.Scene.OVER;
         }

         private backButtonClick() : void {
            // Change from GAME to START scene
            objects.Game.currentScene = config.Scene.START;
        }
    }
}