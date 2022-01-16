import { Request, Response } from "express";
import { ListTransactionsUseCase } from "./listTransactionsUseCase";



class ListTransactionsController{
    
    async handle(request: Request, response: Response): Promise<Response>{
        const listTransactionsUseCase = new ListTransactionsUseCase();

        const transactions = await listTransactionsUseCase.execute();

        return response.status(200).send(transactions);
    }
}

export {ListTransactionsController}