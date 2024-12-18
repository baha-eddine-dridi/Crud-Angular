import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { CalculService } from 'src/app/services/calcul.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  listTodo !: Todo[] ;
  count !: number;

  constructor(private serviceCal: CalculService) {

   }

  ngOnInit(): void {
    this.listTodo = [
      {
        userId: 1,
        id: 1,
        title: 'Faire les courses',
        completed: false
      },
      {
        userId: 1,
        id: 2,
        title: 'Acheter du pain',
        completed: true
      },
      {
        userId: 1,
        id: 3,
        title: 'Acheter du lait',
        completed: false
      },
      {
        userId: 1,
        id: 4,
        title: 'Acheter du beurre',
        completed: false
      },
      {
        userId: 1,
        id: 5,
        title: 'Acheter du fromage',
        completed: true
      }
    ];
  }

getStat(){
this.count = this.serviceCal.getNumberOf(this.listTodo, 'completed', true);
}


}
