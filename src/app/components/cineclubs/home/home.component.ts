import { Component } from '@angular/core';
import { CineClub } from 'src/app/models/cineclub.model';
import { CineclubService } from 'src/app/services/cineclubs/cineclub.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cineClubs: CineClub[] = [];
  cineClubCopy: CineClub[] = [];
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
