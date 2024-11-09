//Clean -> No usar las dependencias simplemente y ya, si no acoplarlas al codigo. Para que 
// en un futuro cuando se necesite cambiar de dependencia el proyecto no esta acoplado a esta.
// Evitar depender de paquetes de terceros
import express, { Router } from "express"
import morgan from 'morgan'

interface Options {
    port?:number;
    routes: Router;
}



export class Server {


    public readonly app = express()
    
    //dependencia eXPLICITA
    private readonly port: number;
    private readonly routes: Router;
    // Aplicar principios responsabilidad unica
    // Mandar la config properties => em vez de jacer modificiaciones internar
    // --ABIERTAS A SU EXPAnCION CERRADAS A SU MODIFICACION--
    // En buenas practica de codigo limpio, si se pasan mas de 4 argumentos es mejor pasar un objeto
    constructor(options: Options){
        //Como el puerto es opcional puedo iniciarlo si no viene
        const { port = 4200, routes } = options
        this.port = port;
        this.routes = routes;
    }

    //dependencia oculta => poner el processs.env directamente ne el codigo
    async start(){

        this.app.use( express.json() );
        this.app.use( express.urlencoded( {extended:true} ));
        this.app.use( morgan('dev') );

        this.app.use( this.routes );

        this.app.listen( this.port , ()=>{
            console.log(`puerto ${this.port}`)
        })
    }


}