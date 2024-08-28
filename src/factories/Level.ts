import { Character } from "../characters/Character";

export interface Level {
    createNovice(name: string): Character;
    createIntermediate(name: string): Character;
    createExpert(name: string): Character;
}
