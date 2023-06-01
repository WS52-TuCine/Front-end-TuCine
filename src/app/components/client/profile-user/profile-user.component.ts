import { Component, Input } from '@angular/core';
import { Cinephile } from 'src/app/core/models/cinephile.model';
import { Person } from 'src/app/core/models/person.model';
import { PersonService } from 'src/app/core/services/auth/user/person.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent {
  @Input() dataEntrante:any;
  public image!: string;
  @Input()
      public person:Person[]=[];
      constructor(){}
}

