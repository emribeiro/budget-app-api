import { Request, Response } from "express";
import { CreateTransactionUseCase } from "./createTransactionUseCase";


class CreateTransactionController{

    async handle(request: Request, response: Response): Promise<Response>{

        const { title, amount, type, category, date } = request.body;

        const createTransactionUseCase = new CreateTransactionUseCase();

        await createTransactionUseCase.execute( { title, amount, type, category, date});

        return response.status(201).send();

    }

}


export {CreateTransactionController};