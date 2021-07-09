import {FormControl, FormGroup, Validators} from "@angular/forms";
import { TweetsService } from "../../../services/tweets.service";
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tweet-input',
  templateUrl: './tweet-input.component.html',
  styleUrls: ['./tweet-input.component.css']
})
export class TweetInputComponent implements OnInit {


  restante: number = 250;
  tweetwrite: any = '';
  hashTags: any = [];
  urlbase: any;
  DataForm = new FormGroup({
    tweet: new FormControl(''),
  });

  selectedFile: any = null;

  @Output() optionSelect = new EventEmitter();

  constructor(
    private TweetService: TweetsService,
  ) { }

  ngOnInit(): void {
    this.urlbase = environment.baseUrl;
  }



  write(tweet: any): void {
   let numero = tweet.length;
   this.restante = 250 - numero;
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
    let mensaje: string = '';
    const data: any = {
      tweet: this.tweetwrite,
      hashtag: this.hashTags
    }

    if(this.restante < 0){
      sentinela = 1;
      mensaje = 'El tweet tiene mas de 250 caracteres';
    }

    if(this.tweetwrite < 0){
      sentinela = 1;
      mensaje = 'El tweet no tiene contenido';
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
        this.enviarImagen(data.id);
        this.optionSelect.emit(true);
        this.hashTags = [];
        this. DataForm = new FormGroup({
          tweet: new FormControl(''),
        });
      });
    }else{
      Swal.fire(
        'Sorry!',
        mensaje,
        'error'
      )
    }
  }

  cargarImagen(event: any){
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile)
  }


  enviarImagen(id:number){
    if(this.selectedFile!==null) {
      this.TweetService.SubirImg(this.selectedFile, id).subscribe((data: any) => {
        console.log(data);
      });
    }
  }

}
