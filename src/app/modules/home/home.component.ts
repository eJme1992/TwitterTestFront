import { Component, OnInit, HostListener  } from '@angular/core';
import {TweetsService} from "../../services/tweets.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tweets: any = [];
  pag: number = 1;



  constructor(
    private TweetService: TweetsService,
  ) { }


  ngOnInit(): void {
    this.GetTweet(true);
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  doSomethingOnScroll(evento: any): any{
    if ((window.innerHeight + window.scrollY) === document.body.offsetHeight) {
      this.GetTweet(false);
    }
  }


  GetTweet(opt: boolean): void{
    if(opt === true){
      this.pag = 1;
      this.tweets = [];
    }
    this.TweetService.List(this.pag).subscribe((data: any) => {
      console.log(data);
      this.pag++;
      this.tweets = this.tweets.concat(data.data.data);
    });
  }


  send(event: any): any{
    this.GetTweet(true);
  }

}
