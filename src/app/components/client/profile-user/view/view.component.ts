import { Component, OnInit } from '@angular/core';
import { Cinephile } from 'src/app/core/models/cinephile.model';
import { Person } from 'src/app/core/models/person.model';
import { PersonService } from 'src/app/core/services/auth/user/person.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit  {
  perfil: Person[] = [];
  searchQuery = '';
  constructor(private PersonService: PersonService) {}

  ngOnInit(): void {

    this.PersonService.getPersons().subscribe((response) => {
      this.perfil = response;
    });
  }
}



