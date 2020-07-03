module objects { // Module => Namespace
    export class Label extends createjs.Text { // Export => Public
        // Variables 
        // Constructor
        constructor(labelString: string, fontSize: string, fontFamily: string, fontColor: string,
            x: number = 0, y: number = 0, isCentered: boolean = false) {

                super(labelString, fontSize + " " + fontFamily, fontColor);

                // Set the registracion point
                if(isCentered) {
                    this.regX = this.getMeasuredWidth() * 0.5;
                    this.regY = this.getMeasuredHeight() * 0.5;
                }

                // Set initial position
                this.x = x;
                this.y = y;
                
            }
        // Methods
    }
}