import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { TweetsService } from "../../../services/tweets.service";

@Component({
  selector: 'app-tweet-input',
  templateUrl: './tweet-input.component.html',
  styleUrls: ['./tweet-input.component.css']
})
export class TweetInputComponent implements OnInit {


  restante: number = 250;
  tweetwrite: any = '';
  hashTags: any = [];
  DataForm = new FormGroup({
    tweet: new FormControl(''),
  });

  constructor(
    private TweetService: TweetsService,
  ) { }

  ngOnInit(): void {
  }

  write(tweet: any): void {
   let numero = tweet.length;
   this.restante = 260 - numero;
   this.tweetwrite = tweet;
   this.getHashTags(tweet);
  }

  getHashTags(string: string): any {
    var hashTags, i, len, word, words;
    words = string.match(/#[a-z]+/gi);
    this.hashTags = words;
  };

  onSubmit(): void {
    let sentinela: number = 0;
    const data: any = {
      tweet: this.tweetwrite,
      hashtag: this.hashTags
    }

    if (sentinela === 0) {
      let request: any = {
        'json':  JSON.stringify(data)
      };

      this.TweetService.Register(request).subscribe((data: any) => {
        Swal.fire(
          'Good job!',
          'Account registered successfully !',
          'success'
        )
        this.hashTags = [];
        this. DataForm = new FormGroup({
          tweet: new FormControl(''),
        });
      });
    }
  }

}
