import { Component, OnInit } from '@angular/core';
import {Todo} from "./../models/Todo";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos', 
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  inputTodo:string = "";

  constructor(){

  }

  ngOnInit(): void {
      this.todos= [
        { content: "Coding", done: true},
        { content: "Sleep", done: false},
        { content: "Work", done: true}
      ]
  }

  toggleDone(id: number) {
    this.todos.map((v,i)=> {
      if (i==id) v.done = ! v.done;
      return v;
    })
  }

  deleteTodo(id: number){
    this.todos = this.todos.filter((v,i) => i != id)
  }

  addTodo(){
    this.todos.push({content: this.inputTodo,
      done: false});

      this.inputTodo= "";
  }
  

}
