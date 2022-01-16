import { ICreateTransactionDTO } from "../dtos/ICreateTransactionDTO";
import { Transaction } from "../model/Transaction";


interface ITransactionRepository{   

    create(data: ICreateTransactionDTO) : Promise<void>;
    list(): Promise<Transaction[]>;
    remove(transactionId: string): Promise<void>;
}


export { ITransactionRepository }