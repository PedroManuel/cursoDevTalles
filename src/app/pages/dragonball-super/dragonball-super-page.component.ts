import { Component, OnInit, inject } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import type { Character } from "../../interfaces/character.interfaces";
import { CharacterAppComponent } from "../../components/dragonball/character-add/character-app.component";
import { DragonballService } from "../../services/dragonball.service";

@Component({
    templateUrl: './dragonball-super-page.component.html',
    selector: 'dragonball-super',
    imports: [CharacterListComponent, CharacterAppComponent],
})

export class DragonballSuperPageComponent {
    public dragoballService = inject(DragonballService)
    





}