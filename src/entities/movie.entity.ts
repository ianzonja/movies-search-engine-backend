import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Actor } from "./actor.entity";
import { Genre } from "./genre.entity";
import { Search } from "./search.entity";

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

    @ManyToMany((type) => Actor, {
        cascade: true,
    })
    @JoinTable({
        name: "movies_actors",
        joinColumn: { name: "movieId", referencedColumnName: "id" },
        inverseJoinColumn: { name: "actorId" }
    })
    actors: Actor[];

    @ManyToMany((type) => Genre, {
        cascade: true,
    })
    @JoinTable({
        name: "movies_genres",
        joinColumn: { name: "movieId", referencedColumnName: "id" },
        inverseJoinColumn: { name: "genreId" }
    })
    genres: Genre[];

    @ManyToMany((type) => Search, {
        cascade: true,
    })
    @JoinTable({
        name: "movies_searches",
        joinColumn: { name: "mobieId", referencedColumnName: "id" },
        inverseJoinColumn: { name: "searchId" }
    })
    searches: Search[];
}