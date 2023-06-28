import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/core/models/person.model';
import { PersonService } from 'src/app/core/services/auth/user/person.service';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from 'src/app/core/services/groups/group.service';
import { Group } from 'src/app/core/models/group.model';

const userResult = localStorage.getItem('userResult');

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit  {
  perfil: Person | null = null;
  searchQuery = '';
  groups: Group[]= [];

  constructor(private personService: PersonService, 
    private groupService: GroupService, 
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    const id = this.getPersonId().id;

    this.perfil = this.getPersonId();
    //console.log(this.perfil);

    this.personService.getAllGroupsByPersonId(id).subscribe((resp:any) => {
      this.groups = resp;
      console.log(this.groups);
    })
    
  }

  getPersonId(){
    if (userResult !== null) {
    const parsedResult = JSON.parse(userResult);
    return parsedResult;      
  } 
}
}





