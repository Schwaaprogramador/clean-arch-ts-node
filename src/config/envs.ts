import 'dotenv/config'
import { get } from "env-var"
//Patron adaptador -> No usar las dependencias de terceros de manera directa.
export const envs = {

    PORT: get("PORT").required().asPortNumber()

}