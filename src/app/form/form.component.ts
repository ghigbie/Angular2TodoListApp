import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  newTodo:string = '';
  todos:string[] = ['Go skydiving', 'Play video games', 'Eat oranges', 'Walk the doggie'];
  
  onSubmit(){
    this.todos.push(this.newTodo);
    this.newTodo = '';
  }
  
  constructor() { }

  ngOnInit() {
  }

}
