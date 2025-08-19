import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import type { Character } from '../../../interfaces/character.interfaces';
@Component({
  selector: 'character-app',
  imports: [],
  templateUrl: './character-app.component.html',
})
export class CharacterAppComponent { 
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();
  
  addCharacter(){
    if (!this.name() || !this.power() || this.power()<=0){
        return;
    }
    const newCharacter: Character ={
        id: 10,
        name: this.name(),
        power: this.power(),
    };
    
    /*this.characters.update(
          (list) => [...list, newCharacter]
    );*/
    this.newCharacter.emit(newCharacter);

  
    this.resetFields();

  }

  resetFields(){
      this.name.set('');
      this.power.set(0);
  }


}
