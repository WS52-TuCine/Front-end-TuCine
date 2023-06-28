import { Component, Input } from '@angular/core';
import { Cinephile } from 'src/app/core/models/cinephile.model';
import { Group } from 'src/app/core/models/group.model';
import { CinephileProfileService } from 'src/app/core/services/auth/cinephile/cinephile-profile.service';
import { parseISO, format } from 'date-fns';

function obtenerCumpleanos(fecha: string): string {
  const fechaNacimiento = parseISO(fecha);
  const cumpleanos = format(fechaNacimiento, 'd \'de\' MMMM');
  return cumpleanos;
}


@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent {
  @Input() dataEntrante:any;
  @Input() groups: any;

  cinemas: [] = [];

  @Input()
      public cinephile:Cinephile[]=[];
      constructor(){
      }

  getBirthday(){
    const fechaNacimiento = this.dataEntrante.birthdate;
    const cumpleanos = obtenerCumpleanos(fechaNacimiento);
    return cumpleanos;
  }
}

