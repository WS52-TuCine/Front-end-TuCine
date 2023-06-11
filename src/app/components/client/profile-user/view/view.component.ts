import { Component, OnInit } from '@angular/core';
// import { Cinephile } from 'src/app/core/models/cinephile.model';
import { CinephileProfileService } from '../../../../core/services/auth/cinephile/cinephile-profile.service';
import { Person } from 'src/app/core/models/person.model';
import { PersonService } from 'src/app/core/services/auth/user/person.service';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from 'src/app/core/services/groups/group.service';
import { Group } from 'src/app/core/models/group.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit  {
  perfil: Person | null = null;
  searchQuery = '';
  groups: Group;
  constructor(private personService: PersonService, private groupService: GroupService, private route: ActivatedRoute) {
    this.groups={} as Group;
  }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.personService.getPersonById(id).subscribe((resp:any) => {
      this.perfil = resp;
    })
    
    
    if (id && typeof id === 'number'){
    this.groupService.getGroupByPersonId(id).subscribe((resp:any) => {
      this.groups = resp;
    })
  }
  }
}

//import { Component, OnInit } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
//import { Person } from 'src/app/core/models/person.model';
//import { Person } from 'src/app/core/models/person.model';
//import { PersonService } from 'src/app/core/services/auth/user/person.service';
//import { PersonService } from 'src/app/core/services/auth/user/person.service';

//
//@Component({
//@Component({
  //selector: 'app-view',
//  selector: 'app-view',
  //templateUrl: './view.component.html',
//  templateUrl: './view.component.html',
// styleUrls: ['./view.component.scss']
//)
//xport class ViewComponent implements OnInit  {
// perfil: Person[] = [];
// searchQuery = '';
// constructor(private PersonService: PersonService) {}
//
// ngOnInit(): void {
//
//   this.PersonService.getPersons().subscribe((response) => {
//     this.perfil = response;
//   });
// }
//
//



