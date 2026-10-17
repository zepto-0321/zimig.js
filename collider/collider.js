export class RectCollider{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    /**
     * 
     * @param {CanvasRenderingContext2D} ctx 
     * @param {Entity} entity 
     */
    draw(ctx,entity){
        ctx.strokeStyle="red";
        ctx.lineWidth=2;
        ctx.strokeRect(
            entity.pos.x - this.width/2,
            entity.pos.y - this.height/2,
            this.width,
            this.height
        )
    }
}

export class CircleCollider{
    constructor(radius){
        this.radius = radius;
    }

    /**
     * 
     * @param {CanvasRenderingContext2D} ctx 
     * @param {Entity} entity 
     */
    draw(ctx,entity){
        ctx.beginPath();
        ctx.arc(
            entity.pos.x,
            entity.pos.y,
            this.radius,
            0,
            Math.PI*2
        );
        ctx.strokeStyle="red";
        ctx.lineWidth=2;
        ctx.stroke();
    }
}