import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Actor } from "./actor.entity";
import { Genre } from "./genre.entity";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    year: number;

    @Column()
    description: string;

    @Column()
    password: string;

    @ManyToMany(type => Actor, actor => actor.movies, { eager: false })
    actors: Actor[];

    @ManyToMany(type => Genre, genre => genre.movies, { eager: false })
    genres: Genre[];
}