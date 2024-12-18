import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user: User;

  constructor() {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  save(f: NgForm) {
    console.log(f.value['login']);
  }

}