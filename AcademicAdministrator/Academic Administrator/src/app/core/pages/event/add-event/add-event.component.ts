import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EventServiceService } from '../event-service.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {
  eventForm: FormGroup;

  eventDMY: any;
  htmlContent: string = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    sanitize: false,
    enableToolbar: true,
    showToolbar: true,
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };

  forminit() {
    this.eventForm = this._fb.group({
      eventName: [''],
      eventDate: [''],
      eventDesc: [''],
    });
  }

  constructor(
    public _event: EventServiceService,
    private domSanitizer: DomSanitizer,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.forminit();
  }

  onSubmit() {
    const eventName = this.eventForm.value['eventName'];
    const eventDesc = this.eventForm.value['eventDesc'];
    const eventDate = this.eventDMY;

    this._event.sendData(this.eventForm.value).subscribe((res) => {
      console.log(res);
    });

    console.log(this.eventForm.value, 'from event');

    this._event.eventData.unshift({
      eventName: eventName,
      eventDate: eventDate,
      eventDesc: eventDesc,
    });
    this.eventForm.reset();
  }

  getDate(event: MatDatepickerInputEvent<Date>) {
    const date = event.value?.getDate();
    const month = event.value?.getMonth() ? event.value.getMonth() + 1 : 1;
    const year = event.value?.getFullYear();
    const fullYear = date + '/' + month + '/' + year;
    this.eventDMY = fullYear;
    console.log(month);
  }

  sanitize(data: string) {
    return this.domSanitizer.bypassSecurityTrustHtml(data);
  }
}
