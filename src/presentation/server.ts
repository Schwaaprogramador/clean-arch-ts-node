//Clean -> No usar las dependencias simplemente y ya, si no acoplarlas al codigo. Para que 
// en un futuro cuando se necesite cambiar de dependencia el proyecto no esta acoplado a esta.
// Evitar depender de paquetes de terceros
import express from "express"


interface Options {
    port?:number;
}



export class Server {


    public readonly app = express()

    //dependencia eXPLICITA
    private readonly port: number;

    // Aplicar principios responsabilidad unica
    // Mandar la config properties => em vez de jacer modificiaciones internar
    // --ABIERTAS A SU EXPACION CERRADAS A SU MODIFICACION--
    // En buenas practica de codigo limpio, si se pasan mas de 4 argumentos es mejor pasar un objeto
    constructor(options: Options){
        //Como el puerto es opcional puedo iniciarlo si no viene
        const { port = 4200 } = options
        this.port = port
    }

    //dependencia oculta => poner el processs.env directamente ne el codigo
    async start(){
        this.app.listen( this.port , ()=>{
            console.log(`puerto ${this.port}`)
        })
    }


}