import { Router } from "express";
import { AuthRoutes } from "./auth/routes";

export class AppRoutes {

    // Si no hay necesidad de usar el contructor, es decir, no 
    // hay inyeccion de dependencias, entonces es recomendable usar el
    // metodo static para Evitar crear INSTANCIAS DE LA CLASE, simplemente llamer los metodos
    static get routes(): Router{
        const router = Router();

        router.use('/api/auth', AuthRoutes.routes)
        return router
    }
}