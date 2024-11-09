import { Request, Response } from "express"
import { RegisterUserDto } from "../../domain"


export class AuthController {

    constructor(){}
    // casos de uso
    registerUser = async (req: Request, res: Response) => {

        const [error, registerUserDto] = RegisterUserDto.create(req.body);
        if(error) return res.status(400).send({ error });
        res.send(registerUserDto);
    }

    
    loginUser = async (req: Request, res: Response) => {
        res.json('registerUserController')
    }

}