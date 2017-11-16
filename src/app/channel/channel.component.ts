import { Component, OnInit, ViewEncapsulation ,Input} from '@angular/core';
import {ApiService} from '../api.service'
@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChannelComponent implements OnInit {
   data ;
videos ;
  @Input() channelId ;
  constructor(private ApiService : ApiService) { }

  ngOnInit()
   {
      /********************* Get Videos List *************************/
    this.ApiService.getVideos('snippet' , this.channelId , '12').subscribe(data => {
      this.data = data;
      this.videos =  this.data.items ;

 }) ;
}
}



