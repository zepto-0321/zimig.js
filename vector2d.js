export class Vec2{
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.mag =Math.hypot(this.x,this.y);
    }

    /**
     * 
     * @param {Vec2} vec2 コピー元のベクトル 
     * @returns {Vec2} コピーされたベクトル
     */
    copy(vec2){
        return new Vec2(vec2.x,vec2.y);
    }

    /**
     * 
     * @param {Vec2} vec2 対象のベクトル
     * @returns {Vec2} 正規化されたベクトル
     */
    normalize(vec2){
        return new Vec2(vec2.x/vec2.mag, vec2.y/vec2.mag);
    }
}