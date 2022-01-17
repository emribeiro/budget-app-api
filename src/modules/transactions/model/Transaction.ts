import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4} from 'uuid';

@Entity("transactions")
class Transaction{

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    amount: number;

    @Column()
    type: string;

    @Column()
    category: string;

    @Column()
    date: Date;

    @CreateDateColumn({type: 'timestamptz'})
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }

}

export { Transaction }