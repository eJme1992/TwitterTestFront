import { Component, OnInit, Input} from '@angular/core';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.css']
})
export class TweetCardComponent implements OnInit {

  @Input() messageError = '';
  @Input() tweet: any = '';
  @Input() iduser: any = '';
  urlbase: any;
  constructor() { }

  ngOnInit(): void {
    this.urlbase = environment.baseUrl;
  }

}
