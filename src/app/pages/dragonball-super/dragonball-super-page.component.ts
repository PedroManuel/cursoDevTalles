import { Component, OnInit, signal, computed } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import type { Character } from "../../interfaces/character.interfaces";
import { CharacterAppComponent } from "../../components/dragonball/character-add/character-app.component";




@Component({
    templateUrl: './dragonball-super-page.component.html',
    selector: 'dragonball-super',
    imports: [CharacterListComponent, CharacterAppComponent],
})

export class DragonballSuperPageComponent {

    name = signal('');
    power = signal(0);

    characters = signal<Character[]>([
        {id:1, name:'Goku', power:9001},
        {id:3, name:'Vegeta', power: 8000},

    ]);

    addCharacter(character: Character){
        this.characters.update(
            (list)=>[...list, character]
        );
    }

    powerClasses = computed(() =>{
        return{
            'text-danger': true,
        }
    })



}