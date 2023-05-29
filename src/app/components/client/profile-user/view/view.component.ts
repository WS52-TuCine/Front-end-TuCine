import { Component, OnInit } from '@angular/core';
import { Cinephile } from 'src/app/core/models/cinephile.model';
import { CinephileProfileService } from '../../../../core/services/auth/cinephile/cinephile-profile.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit  {
  perfil: Cinephile[] = [];
  searchQuery = '';
  constructor(private CinephileProfileService: CinephileProfileService) {}

  ngOnInit(): void {

    this.CinephileProfileService.getCinephileList().subscribe((response) => {
      this.perfil = response;
    });
  }
}



