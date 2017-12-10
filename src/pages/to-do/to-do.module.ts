import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToDoPage } from './to-do';
//New
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@NgModule({
  declarations: [
    ToDoPage,
  ],
  imports: [
    IonicPageModule.forChild(ToDoPage),
  ],
})
export class ToDoPageModule {}

//New
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    todos: string[] = [];
    todo: string;
 
    constructor(public navCtrl: NavController) {
 
    }
 
    add() {
        this.todos.push(this.todo);
        this.todo = "";
    }
 
    delete(item) {
        var index = this.todos.indexOf(item, 0);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
}