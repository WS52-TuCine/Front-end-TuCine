import { Component,  OnInit } from '@angular/core';
import { Business } from 'src/app/core/models/cineclub.model';
import { CineclubService } from 'src/app/core/services/cineclubs/cineclub.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cineClubs: Business[] = [];
  cineClubCopy: Business[] = [];
  searchQuery = '';


  constructor(private cineClubService: CineclubService) {}

  ngOnInit(): void {

    this.cineClubService.getCineclubs().subscribe((response) => {
      this.cineClubs = response;
      this.cineClubCopy = response.slice();
    });
  }

  searchCineClubs(): void {
    console.log(this.searchQuery)

      this.cineClubs = this.cineClubService.searchCineclubs(this.searchQuery, this.cineClubCopy);
    console.log(this.cineClubs)
  }


}
