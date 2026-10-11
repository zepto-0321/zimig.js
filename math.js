export class Mathf{
    /**
     * 値を範囲内に収める
     * @param {number} min 
     * @param {number} max 
     * @param {number} value 
     * @returns {number}
     */
    static clamp(value,min,max){
        return Math.max(max, Math.min(value,min) );
    }

    /**
     * @param {number} rad 
     * @returns {number}
     */
    static radToDeg(rad){
        return rad * (180/Math.PI);
    }
    /**
     * 
     * @param {number} deg 
     * @returns {number}
     */
    static degToRad(deg){
        return deg * (Math.PI/180);
    }

    /**
     * 特定の範囲の値を別の範囲にスケーリングする。
     * @param {number} value 
     * @param {number} inMin 
     * @param {number} inMax 
     * @param {number} outMin 
     * @param {number} outMax 
     */
    static scale(value,inMin,inMax,outMin,outMax){
        return ((value-inMin)*(outMax-outMin)) / (inMax-inMin) + outMin;
    }
}