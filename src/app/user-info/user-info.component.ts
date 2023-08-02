import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  @Input() user: User;

  @Output() emiterAddCharacter = new EventEmitter<User>();

  methodAddCharacter(user: User) {
    user.userName = user.userName + "1";
    this.emiterAddCharacter.emit(user);
  }


  editUser(userString : string){
    window.alert(userString);
  }
}
