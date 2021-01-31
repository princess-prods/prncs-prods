import { KeyValue } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public socials: KeyValue<string, string>[] = [
    { key: 'fa-instagram', value: 'https://instagram.com/princessprods' },
    { key: 'fa-twitter', value: 'https://twitter.com/princess_prods' },
    { key: 'fa-500px', value: 'https://500px.com/princessprods' },
    { key: 'fa-reddit-alien', value: 'https://reddit.com/u/princessprods'}
  ];

  sexyJobsUrl = 'https://www.sexyjobs.com/jobs/hardcore-porn/E93163';
  pornhubUrl = 'https://www.pornhub.com/model/princessprods';

  constructor() { }

  ngOnInit(): void {
  }

}
