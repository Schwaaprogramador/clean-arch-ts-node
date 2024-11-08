//tenes el archivo de los envs aparte. No usarlo de manera directa
import { envs } from "./config"
import { AppRoutes } from "./presentation/routes"
import { Server } from "./presentation/server"

// Function anonima autoinvocada
//-> crea un scope propio
//-> la function main puede ser async de entrada
(()=>{
    main()
})()


async function main() {

    new Server({
        port: envs.PORT,
        routes: AppRoutes.routes

    }).start()

}