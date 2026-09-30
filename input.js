export class Input{
    constructor(canvas){
        this.canvas = canvas;
        this.mouse = {x:0, y:0};
        this.key = {};

        this.canvas.addEventListener("pointermove",(e)=>{
            const rect = e.target.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
        });

        window.addEventListener("keydown",(e)=>{
            this.key[e.key] = true;
        });
        window.addEventListener("keyup",(e=>{
            this.key[e.key] = false;
        }));
    }

    getKey(key){
        return this.key[key] === true;
    }
}