import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  question: string | undefined ;
  reponse : string | undefined ;
  message : string | undefined ;
  constructor() { }

  ngOnInit(): void {
    this.question = "Quelle est la capitale de la France ?";
    this.reponse = "Paris";
  }

  correction(reponseEtudiant: string){
    if(this.reponse === reponseEtudiant){
      this.message = "Bonne réponse !";
    }else{
      this.message = "Mauvaise réponse !";
    }
  }

}
