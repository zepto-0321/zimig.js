export class Renderer{
    constructor(canvas,debug){
        this.canvas =canvas;
        this.ctx=canvas.getContext("2d");
        
        this.debug = debug;
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

            if(this.debug.showCollider) entity.collider.draw(this.ctx,entity);
        }
    }
}