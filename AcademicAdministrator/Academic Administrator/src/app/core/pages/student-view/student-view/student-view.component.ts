import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef, OnChanges } from '@angular/core';
import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);
import { setOptions } from '@mobiscroll/angular';
import { StudentViewService } from '../student-view.service';
import { HttpClient } from '@angular/common/http';
import { ChartComponent } from "ng-apexcharts";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexNonAxisChartSeries,
  ApexResponsive,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};
export type ChartOptions2 = {
  series_2: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';

import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';

import { EventColor } from 'calendar-utils';
import { AuthService } from 'src/app/auth/auth.service';
import { StudentViewModule } from '../student-view.module';

const colors: Record<string, EventColor> = {
  red: {
    primary: '#ff0000',
    secondary: '#FAE3E3',
  },
  green: {
    primary: '#00cc15',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};
@Component({
  selector: 'app-student-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
    h3 {
      margin: 0 0 10px;
    }
    
      pre {
        background-color: #f5f5f5;
        padding: 15px;
      }
      `,
  ],
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit, OnChanges {

  @ViewChild("chart") chart?: ChartComponent;
  // public chartOptions: Partial<ChartOptions>;
  @ViewChild("chart2") chart2?: ChartComponent;
  public chartOptions2: Partial<ChartOptions2>;


  event: any;
  search: boolean = false;
  id: string = '';
  name: string = '';
  dept: string = '';
  atted: string = '';
  gen: string = '';
  dob: string = '';
  mail: String = '';
  mobile: string = '';
  img: string = '';
  add: string = '';
  fatherName: string = '';
  fatherMobile: string = '';
  fatherOccupation: string = '';
  motherName: string = '';
  motherMobile: string = '';
  motherOccupation: string = '';
  viewDataStd: any;
  b: any = this._stdview.b;


  // public _stddata: StudentViewService
  constructor(public http: HttpClient, public _stdview: StudentViewService) {


    this.chartOptions2 = {
      series_2: [79, 21],
      labels: ['Absent', 'Present',],
      chart: {
        width: '100%',
        type: "donut",
      },

      dataLabels: {
        enabled: true
      },
      fill: {
        type: "gradient",
        colors: ['#24e7a5', '#008ffb']

      },
      legend: {
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

  }


  ngOnInit(): void {
    // this.data();
    this.events.forEach((a: any) => {
      a.title == 'present' ? a.color = { ...colors.green } : a.color = { ...colors.red }
    });

    //   var myChart = new Chart("myChart", {
    //     type: 'doughnut',
    //     data: {
    //       datasets: [{
    //             label: '% percentage',
    //             data: [75,25],
    //             backgroundColor: [
    //               '#9932CC',
    //               '	#FF69B4'
    //             ],
    //             borderColor: [
    //               '#9932CC',
    //                 '	#FF69B4',
    //               ],
    //               // borderWidth: 2,
    //               hoverOffset: 25,
    //               offset:10,
    //               // borderJoinStyle:'round',
    //               // spacing:4,
    //             borderRadius: 0,
    //             // clip: 10,
    //             rotation:-30,
    //         }],
    //         labels: ['present', 'absent'],

    //       },
    //       options: {
    //         cutout:50,
    //         maintainAspectRatio:false,
    //         animation:{
    //           duration:2000,
    //           // delay:1000,
    //         }
    //     },
    // });

  }

  handleEvent(arg0: string, event: CalendarEvent<any>) {
    throw new Error('Method not implemented.');
  }

  @ViewChild('modalContent', { static: true }) modalContent?: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData?: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent: any) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>();

  events: any = [
    {
      start: startOfDay(new Date(2023, 1, 1)),
      title: 'absent',
      // color: { ...colors.red },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 1, 2)),
      title: 'present',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 1, 3)),
      title: 'present',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 1, 4)),
      title: 'present',
      // color: { ...colors.red },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 1, 5)),
      title: 'absent',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 1, 6)),
      title: 'present',
      // color: { ...colors.green },
      // actions: this.actions,
    },

  ];

  activeDayIsOpen: boolean = false;

  // a: any = 222009525;

  // data() {
  //   this._stddata.stdget(this.a).subscribe(res => {
  //     console.log(res.firstName);
  //     this.name = res.firstName
  //   })
  // }

  ngOnChanges(): void {
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent: any) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }


  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event: any) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }



  // nameFunc() {
  //   if (this.name === '') {
  //     this.name = 'kotti'
  //   }
  // }


  onSearch() {
    // this.search = !this.search
  }

  xyz() {
    // console.log(this._stdview.a);
    // console.log(this._stdview.b);
  }

  regSearch(event: any) {
    //   this._stddata.stdget(event.target.value).subscribe((res: any) => {
    //     this.name = res.firstName + ' ' + res.lastName;
    //     this.id = res.registerno;
    //     this.mobile = res.mobile;
    //     this.mail = res.email;
    //     this.gen = res.gender;
    //     this.dob = res.dob;
    //     this.img = res.img;
    //     this.add = res.address;
    //     this.dept = res.deptbranch;
    //     this.fatherName = res.fatherName;
    //     this.fatherMobile = res.fatherMobile;
    //     this.fatherOccupation = res.fatherOccupation;
    //     this.motherName = res.motherName;
    //     this.motherMobile = res.motherMobile;
    //     this.motherOccupation = res.motherOccupation;
    //   })
  }

}
