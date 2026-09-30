export class Time{
    static dt =0;
    static fps =0;


    static #lastTime=performance.now();
    static #time =0;

    static update(){
      const now = performance.now();
      Time.dt= (now-this.#lastTime)/1000;
      Time.#time +=Time.dt;
      Time.#lastTime = now;
    }
}