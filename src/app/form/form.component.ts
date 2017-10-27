import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  todos = ['Go skydiving', 'Play video games', 'Eat oranges', 'Walk the doggie'];
  constructor() { }

  ngOnInit() {
  }

}
