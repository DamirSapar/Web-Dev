import { Component, inject, signal } from '@angular/core';
import { RouterOutlet , RouterLink} from '@angular/router';
import {Users} from './user'
import { Child } from './child';
import { Comments } from './comments';
import { ReactiveFormsModule , FormControl, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import { CarService } from './car.service';
import { UpperCasePipe } from '@angular/common';
import { LowerCasePipe } from '@angular/common';
import { DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';
import { ReversePipe } from './reverse.pipe';


@Component({
  selector:'app-user',
  template: ` Username: {{ username }} `,
  standalone:true
})

export class User {
  username = 'youngTech';
}

@Component({
  selector: 'app-root',
  imports: [ReversePipe, RouterLink, RouterOutlet, Users, User, Child, Comments, ReactiveFormsModule, UpperCasePipe, LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('tutorial-app');

  city='Almaty';
  isServerRunning=true;

  users = [
  {id: 0, name: 'Sarah'},
  {id: 1, name: 'Amy'},
  {id: 2, name: 'Rachel'},
  {id: 3, name: 'Jessica'},
  {id: 4, name: 'Poornima'},
];

  isEditable = true;

  message='';
  showSecretMessage(){
    this.message = 'Way to go🚀';

    alert(this.message)
  }

  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }

  profileForm= new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  handleSubmit(){
    alert(
      this.profileForm.value.name+'|'+this.profileForm.value.email
    );
  }

  carService=inject(CarService);
  display=this.carService.getCars().join(' ⭐️ ');

  loudMessage = 'we think you are doing great!';
  username= 'YOUNGTECH';

  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;

  word = 'You are a champion';
}
