import { getRepository, Repository } from "typeorm";
import { ICreateTransactionDTO } from "../../dtos/ICreateTransactionDTO";
import { Transaction } from "../../model/Transaction";
import { ITransactionRepository } from "../ITransactionsRepository";


class TransactionsRepository implements ITransactionRepository{

    private repository: Repository<Transaction>;

    constructor(){
        this.repository = getRepository(Transaction);
    }

    async create({title, amount, type, category, date}: ICreateTransactionDTO): Promise<void> {
        const transaction = this.repository.create({
            title, 
            amount,
            type,
            category,
            date
        });

        await this.repository.save(transaction);


    }


    async list(): Promise<Transaction[]> {
        const transactions = await this.repository.find();

        return transactions;
    }

    async remove(transactionId: string): Promise<void>{
        const transaction = await this.repository.findOne({id: transactionId});
        await this.repository.remove(transaction);
    }

}

export { TransactionsRepository}