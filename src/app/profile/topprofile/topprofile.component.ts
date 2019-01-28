import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/interfaces/user';

@Component({
  selector: 'app-topprofile',
  templateUrl: './topprofile.component.html',
  styleUrls: ['./topprofile.component.scss']
})
export class TopprofileComponent implements OnInit {
  @Input() user: User
  constructor() { }

  ngOnInit() {
    
  }

}
