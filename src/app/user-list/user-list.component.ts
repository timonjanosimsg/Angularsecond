import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {applyMixins} from "rxjs/internal/util/applyMixins";
import {filter} from "rxjs";
import {User} from "../user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  filterValue : string = "";

  protected readonly applyMixins = applyMixins;
  protected readonly filter = filter;

  numbers: number[] = [1, 2, 3, 4, 5];

  get evenNumbers(): number[] {
    return this.numbers.filter(number => number % 2 === 0);
  }

  @Input() userList: User[] = [];

  @Output() editEventEmiter = new EventEmitter<string>();

  triggerEdit(): void{
    this.editEventEmiter.emit('Some string');
  }

  ngOnInit(): void {
    console.log(this.userList);
  }

  constructor() {
  }


}
