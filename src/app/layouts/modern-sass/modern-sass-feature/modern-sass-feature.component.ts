import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-sass-feature',
  templateUrl: './modern-sass-feature.component.html',
  styleUrls: ['./modern-sass-feature.component.scss']
})
export class ModernSassFeatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

features = [
  {
    img:'assets/images/saas2/advance-feature/1.png',
    title: 'No-code Web Scraper Builder',
    description: 'Lorem Ipsum is simply dummy text of the printing and industry.'
  },
  {
    img:'assets/images/saas2/advance-feature/2.png',
    title: 'Dedicated Support',
    description: 'Lorem Ipsum is simply dummy text of the printing and industry.'
  },
  {
    img:'assets/images/saas2/advance-feature/3.png',
    title: 'Personalized Dashboard',
    description: 'Lorem Ipsum is simply dummy text of the printing and industry.'
  },
  {
    img:'assets/images/saas2/advance-feature/4.png',
    title: 'API Endpoints',
    description: 'Lorem Ipsum is simply dummy text of the printing and industry.'
  }
]
}
