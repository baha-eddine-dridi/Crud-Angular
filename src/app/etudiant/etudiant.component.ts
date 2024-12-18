import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
 @Input() questiondeMonEnseignant: string | undefined ;



 
 reponseEtudiant : string | undefined ;
@Output() reponseEtudiantEnvoyee = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    
  }

  envoyerReponse(){
this.reponseEtudiantEnvoyee.emit(this.reponseEtudiant);
  }

}
