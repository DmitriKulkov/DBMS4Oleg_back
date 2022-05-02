export class CreateClientsDto{
    id: number;
    name: string;
    surname: string;
    patronymic?: string;
    birthday: Date;
}