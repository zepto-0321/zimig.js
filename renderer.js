export class Renderer{
    constructor(canvas){
        this.canvas =canvas;
        this.ctx=canvas.getContext("2d");
    }

    clear(){
        this.ctx.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );
    }

    render(entities){
        this.clear();
        for(const entity of entities){
            entity.draw(this.ctx);
        }
    }
}