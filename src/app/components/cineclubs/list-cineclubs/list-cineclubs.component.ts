import { Component, OnInit, Input } from '@angular/core';
import { CineClub } from 'src/app/models/cineclub.model';

@Component({
  selector: 'app-list-cineclubs',
  templateUrl: './list-cineclubs.component.html',
  styleUrls: ['./list-cineclubs.component.scss']
})
export class ListCineclubsComponent {
  pageChanged($event: number) {
    throw new Error('Method not implemented.');
    }
      p:number=1;

      @Input() dataEntrante:any;
      public image!: string;
      @Input()
      public cineClubs:CineClub[]=[];


      constructor(){}

}


