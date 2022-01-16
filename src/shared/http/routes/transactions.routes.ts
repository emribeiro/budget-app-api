import { Router } from "express";
import { CreateTransactionController } from "../../../modules/transactions/useCases/createTransaction/createTransactionController";
import { ListTransactionsController } from "../../../modules/transactions/useCases/listTransactions/listTransactionsController";
import { RemoveTransactionController } from "../../../modules/transactions/useCases/removeTransaction/removeTransactionController";



const transactionsRouter = Router();

const createTransactionController = new CreateTransactionController();
const listTransactionsController = new ListTransactionsController();
const removeTransactionController = new RemoveTransactionController();

transactionsRouter.post("/", createTransactionController.handle);
transactionsRouter.get("/", listTransactionsController.handle);
transactionsRouter.delete("/:id", removeTransactionController.handle);

export { transactionsRouter }