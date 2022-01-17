import { TransactionsRepository } from "../../repository/impl/TransactionsRepository";

import dayjs from "dayjs";
import { Transaction } from "../../model/Transaction";

interface IRequest{
    title: string;
    amount: number;
    type: string;
    category: string;
    date: string;
}

class CreateTransactionUseCase{

    async execute( { title, amount, type, category, date }: IRequest): Promise<Transaction>{

        const transactionRepository = new TransactionsRepository();
    
        const transaction = await transactionRepository.create( { 
            title,
            amount,
            type,
            category,
            date:  dayjs(date, "YYYY-MM-DD", "pt-br").toDate()
        });

        return transaction;
    }


}

export { CreateTransactionUseCase }