import { TransactionsRepository } from "../../repository/impl/TransactionsRepository";
import { Transaction } from "../../model/Transaction";

class ListTransactionsUseCase{

    async execute(): Promise<Transaction[]>{

        const transactionsRepository = new TransactionsRepository();

        const transactions = await transactionsRepository.list();

        return transactions;
    }

}

export { ListTransactionsUseCase }