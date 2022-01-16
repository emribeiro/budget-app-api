import { Request , Response} from "express";
import { RemoveTransactionUseCase } from "./removeTransactionUseCase";

class RemoveTransactionController{

    async handle(request: Request, response: Response): Promise<Response>{
        const {id} = request.params;

        const removeTransactionUseCase = new RemoveTransactionUseCase();
        await removeTransactionUseCase.execute(id);

        return response.status(200).send();
    }

}

export { RemoveTransactionController }