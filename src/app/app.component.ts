import { Component } from '@angular/core';
import {User} from "./user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularsecond';

  users : User[] = [
    new User("Vasile",
      "Gheorghe",
      13,
      1,
      "0770681234",
      "abc@gmail.com",
      "usernameVasileGheorghe"),
    new User( "John",
      "Doe",
      25,
      2,
      "1234567890",
      "john.doe@example.com",
      "usernameJohnDoe"),
    new User("Jane",
      "Smith",
      30,
      3,
      "9876543210",
      "jane.smith@example.com",
      "usernameJaneSmith")
  ];

  editUser(userString : string){
    window.alert(userString);
  }
}
