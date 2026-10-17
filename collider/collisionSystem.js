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

    //円と矩形
    /**
     * 
     * @param {Entity} circle 
     * @param {Entity} rect 
     */
    circleRect(circle,rect){
        const dx = circle.pos.x - rect.pos.x;
        const dy = circle.pos.y - rect.pos.y;

        const closedX = Mathf.clamp(dx, -rect.collider.width/2, rect.collider.width/2);
        const closedY = Mathf.clamp(dy, -rect.collider.height/2, rect.collider.height/2);

        const ddx = dx-closedX;
        const ddy = dy-closedY;

        return ddx*ddx + ddy*ddy <= circle.collider.radius**2;
    }

    //円どうし
    circleCircle(a,b){
        const dx = a.pos.x - b.pos.x
        const dy = a.pos.y - b.pos.y;
        const sumRadius = a.collider.radius + b.collider.radius;
        const sqDist = dx*dx + dy*dy;

        return sqDist <= sumRadius*sumRadius;
    }

    //矩形どうし
    rectRect(a,b){
        //AABB
        return (
            Math.abs(a.pos.x - b.pos.x) <= (a.collider.width+b.collider.width)/2 &&
            Math.abs(a.pos.y - b.pos.y) <= (a.collider.height+b.collider.height)/2
        );
    }
}