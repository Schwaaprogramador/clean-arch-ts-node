import { Request, Response } from "express"


export class AuthController {

    constructor(){}
    // casos de uso
    registerUser = async (req: Request, res: Response) => {
        res.json('registerUserController')
    }

    loginUser = async (req: Request, res: Response) => {
        res.json('registerUserController')
    }

}