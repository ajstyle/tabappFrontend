import { ApiService } from './../api.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-you-tube',
  templateUrl: './you-tube.component.html',
  styleUrls: ['./you-tube.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class YouTubeComponent implements OnInit {
  channelList ;
  show : boolean = false
  constructor(private ApiService : ApiService) { }

  ngOnInit() {
    this.show = true
    this.ApiService.getChannel().subscribe(data=>{
      this.channelList = data ;
      console.log(this.channelList);
      this.show = false ;
    })
  }

}
