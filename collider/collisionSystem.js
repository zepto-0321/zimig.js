import { CircleCollider, RectCollider } from "./collider.js"
import { Mathf } from "../math.js";

export class CollisionSystem{
    /**
     * エンティティどうしが触れているかを判定
     * @param {Entity} a 
     * @param {Entity} b 
     */
    check(a,b){
        if(!a.collider || !b.collider) return false;

        if(a.collider instanceof CircleCollider &&
            b.collider instanceof RectCollider){
             return this.circleRect(a,b);
        }
        if(a.collider instanceof RectCollider &&
            b.collider instanceof CircleCollider){
             return this.circleRect(b,a);
        }
        if(a.collider instanceof CircleCollider &&
            b.collider instanceof CircleCollider){
             return this.circleCircle(a,b);   
        }
        if(a.collider instanceof RectCollider &&
            b.collider instanceof RectCollider){
             return this.rectRect(a,b);
        }
        //不明colliderの場合
        return false;
    }

    //drawImage()は画像の左上基準だからEntityの中心座標じゃないよ！

    //円と矩形
    /**
     * 
     * @param {Entity} circle 
     * @param {Entity} rect 
     */
    circleRect(circle,rect){
        const cx = circle.pos.x + circle.collider.radius;
        const cy = circle.pos.y + circle.collider.radius;

        const closestX = Mathf.clamp(
            cx,
            rect.pos.x,
            rect.pos.x + rect.collider.width
        );
        const closestY = Mathf.clamp(
            cy,
            rect.pos.y,
            rect.pos.y + rect.collider.height
        );

        const dx = cx - closestX;
        const dy = cy - closestY;

        return dx*dx + dy*dy <= circle.collider.radius **2;
    }

    //円どうし
    circleCircle(a,b){
        const dx = (a.pos.x + a.collider.radius) - (b.pos.x + b.collider.radius);
        const dy = (a.pos.y + a.collider.radius)- (b.pos.y + b.collider.radius);
        const sumRadius = a.collider.radius + b.collider.radius;
        const sqDist = dx*dx + dy*dy;

        return sqDist <= sumRadius*sumRadius;
    }

    //矩形どうし
    rectRect(a,b){
        //AABB
        return (
            a.pos.x < b.pos.x + b.collider.width &&
            a.pos.x + a.collider.width > b.pos.x &&
            a.pos.y < b.pos.y + b.collider.height &&
            a.pos.y + a.collider.height > b.pos.y
        );
    }
}