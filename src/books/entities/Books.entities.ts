import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "Books"})
export class BooksEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    titulo: string;

    @Column()
    autor: string;

    @Column()
    anio: number;

    @Column()
    disponible: boolean;
}