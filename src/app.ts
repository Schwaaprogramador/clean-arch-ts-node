
import { envs } from "./config"
import { Server } from "./presentation/server"

//Function anonima autoinvocada
//-> crea un scope propio
//-> la function main puede ser async de entrada
(()=>{
    main()
})()


async function main() {

    new Server({port: envs.PORT}).start()

}