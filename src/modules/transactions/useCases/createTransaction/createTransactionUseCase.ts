import { TransactionsRepository } from "../../repository/impl/TransactionsRepository";

interface IRequest{
    title: string;
    amount: number;
    type: string;
    category: string;
    date: string;
}

class CreateTransactionUseCase{

    async execute( { title, amount, type, category, date }: IRequest): Promise<void>{

        const transactionRepository = new TransactionsRepository();
    
        await transactionRepository.create( { 
            title,
            amount,
            type,
            category,
            date:  new Date(date)
        });
    }


}

export { CreateTransactionUseCase }