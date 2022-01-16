import { TransactionsRepository } from "../../repository/impl/TransactionsRepository";


class RemoveTransactionUseCase{

    async execute(transactionId: string): Promise<void>{
        const transactionRepository = new TransactionsRepository();

        await transactionRepository.remove(transactionId);
    }

}

export { RemoveTransactionUseCase }