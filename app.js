import { Time } from "./time.js";
import { Renderer } from "./renderer.js";
export class App{
    /**
     * 
     * @param {HTMLElement} canvas ゲームで使うキャンバス
     */
    constructor(canvas){
        this.scenes={};
        this.current=null;
        this.renderer=new Renderer(canvas);
        this.collisionSystem
    }

    /**
     * 
     * @param {string} name シーン名
     * @param {Function} func そのシーンで実行する処理
     */
    on(name,func){
        const sceneBase={
          loop:null,
          entities:[]
        }

        this.preScene = sceneBase;
        func();
        this.scenes[name] =sceneBase;

        this.preScene = null;
    }

    change(name){
        console.log(`CHANGED:${name}`);
        this.current=this.scenes[name];
    }

    /**
     * 
     * @param {Function} lfunc ループ関数にしたい関数
     * @throws {Error} 宣言場所の不正
     */
    setLoopFunction(lfunc){
        if(!this.preScene) throw new Error(
            "setLoopFunction() must be called within app.on()"
        );
        this.preScene.loop = lfunc;
    }

    /**
     * エンティティ追加
     * @param {Entity} entity 追加するエンティティ 
     */
    add(entity){
        if(!this.preScene) throw new Error(
            "add() must be called within app.on"
        );
        this.preScene.entities.push(entity);
    }

    run(){
        const loop =()=>{
            Time.update();
            this.current?.loop?.();

            const entities = this.current.entities ?? [];
            this.renderer.render(entities);

            requestAnimationFrame(loop);
        }

        requestAnimationFrame(loop);
    }

    globalize(namespace){
        for(const [name,value] of Object.entries(namespace)){
            if(name === "App") continue; //Appをスキップ

            if(name in globalThis) {
                console.warn(
                    `Global "${name}" is already exists :(`
                );
                continue;
            }

            globalThis[name] = value;
        }
    }
}