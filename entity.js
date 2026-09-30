import { Vec2 } from "./vector2d.js";
import { Time } from "./time.js";
export class Entity{
    /**
     * 
     * @param {Vec2} pos 
     * @param {img} img 
     */
    constructor(pos,img){
        this.pos = pos;
        this.img = new Image();
        this.img.src=img;
    }

    /**
     * 
     * @param {Vec2} vec2 移動する方向のベクトル 
     */
    move(vec2){
        this.pos.x+=vec2.x*Time.dt;
        this.pos.y+=vec2.y*Time.dt;
    }

    /**
     * 
     * @param {Vec2} vec2 移動する座標のベクトル
     */
    goto(vec2){
        this.pos.x=vec2.x;
        this.pos.x=vec2.y;
    }

    draw(ctx){
        if(!this.img) return;
        ctx.drawImage(
            this.img,
            this.pos.x,
            this.pos.y
        );
    }
}