import { Component, input } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'app-user2',
    template:`<p>The user's name is {{name()}}</p>
    <p>Framework:{{favoriteFramework}}</p>
    <label for="framework">
    Favorite Framework:
    <input id="framework" type="text" [(ngModel)]=favoriteFramework />
    </label>
    <button (click)=showFramework()>Show Framework</button>`,
    standalone:true,
    imports: [NgOptimizedImage,FormsModule]
})

export class Users {
    name = input<string>();
    favoriteFramework='';

    showFramework(){
        alert(this.favoriteFramework)
    }
}