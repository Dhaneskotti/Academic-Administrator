import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../event-service.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.scss'],
})
export class ViewEventComponent implements OnInit {
  constructor(public _getEvent: EventServiceService) { }
  eventData: any;
  cardImg: string =
    'https://www.financemagnates.com/wp-content/uploads/2016/06/mic.jpg';

  ngOnInit(): void {
    this.eventdata();
  }

  eventdata() {
    this._getEvent.getData().subscribe((res: any) => {
      console.log('response form api', res);
      this.eventData = res;
    });
  }

  delete(event: any) {
    console.log(event._id);
    this._getEvent.delete(event._id).subscribe((res: any) => {
      this.eventdata();
    });
  }
}
