import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	 h1Style: boolean = false;

  constructor(private data: DataService) { }

  ngOnInit() {
		this.data.getUsers().subscribe(data => {
        this.users = data;
				  console.log(this.users.data[0].id);
      }
    );
  }
	  firstClick() {
    this.h1Style=true;
  }
	secondclick() {
		this.data.secondclick();
	}

}
