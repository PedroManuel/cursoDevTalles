import { Injectable, signal,effect } from '@angular/core';
import type { Character } from '../interfaces/character.interfaces';


const loadFromLocalStorage = ():Character[]=>{
    const characters = localStorage.getItem('characters');

    return characters ? JSON.parse(characters): [];
}

@Injectable({providedIn: 'root'})
export class DragonballService {

    characters = signal<Character[]>(loadFromLocalStorage());
 
/*
    characters = signal<Character[]>([
        {id:1, name:'Goku', power:9001},
        {id:3, name:'Vegeta', power: 8000},

    ]);
*/
    saveToLocalStorage = effect( () => {
        localStorage.setItem('ccharacters', JSON.stringify(this.characters()))
        console.log(`Character count ${ this.characters().length}`)
    }
    
    );

    addCharacter(character: Character){
        this.characters.update(
            (list)=>[...list, character]
        );
    }
    
}

// DI es utilizado como un singelton

