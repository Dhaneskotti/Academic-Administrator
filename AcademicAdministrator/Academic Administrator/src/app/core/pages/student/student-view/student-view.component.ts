import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { StdDataService } from '../std-data.service';
// Chart.register(...registerables);
import { setOptions } from '@mobiscroll/angular';
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

export class StudentViewComponent implements OnInit {
  ngOnInit(): void {
    this.data()

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
  constructor(public _stddata: StdDataService, public http: HttpClient) {
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

  @ViewChild("chart") chart?: ChartComponent;
  // public chartOptions: Partial<ChartOptions>;
  @ViewChild("chart2") chart2?: ChartComponent;
  public chartOptions2: Partial<ChartOptions2>;

  event: any;
  search: boolean = false;
  id: string = this._stddata.id;
  name: string = this._stddata.name;
  dept: string = this._stddata.dept;
  atted: string = this._stddata.atted
  gen: string = this._stddata.gen;
  dob: string = this._stddata.dob;
  mail: String = this._stddata.mail;
  mobile: Number = this._stddata.mobile;
  img: string = this._stddata.img;
  add: string = this._stddata.address
  fatherName: string = this._stddata.fatherName;
  fatherMobile: number = this._stddata.fatherMobile;
  fatherOccupation: string = this._stddata.fatherOccupation
  motherName: string = this._stddata.motherName;
  motherMobile: number = this._stddata.motherMobile;
  motherOccupation: string = this._stddata.motherOccupation;
  viewDataStd: any;


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
      start: startOfDay(new Date(2023, 2, 1)),
      title: 'absent',
      // color: { ...colors.red },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 2)),
      title: 'present',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 3)),
      title: 'present',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 4)),
      title: 'present',
      // color: { ...colors.red },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 5)),
      title: 'absent',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 6)),
      title: 'present',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 7)),
      title: 'absent',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 8)),
      title: 'absent',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 9)),
      title: 'present',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 10)),
      title: 'present',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 11)),
      title: 'absent',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 12)),
      title: 'absent',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 13)),
      title: 'present',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 14)),
      title: 'present',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 15)),
      title: 'absent',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 16)),
      title: 'present',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 17)),
      title: 'absent',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 18)),
      title: 'absent',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 19)),
      title: 'absent',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 20)),
      title: 'present',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 21)),
      title: 'present',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 22)),
      title: 'present',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 23)),
      title: 'present',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 24)),
      title: 'present',
      // color: { ...colors.green },
      // actions: this.actions,
    },
    {
      start: startOfDay(new Date(2023, 2, 25)),
      title: 'absent',
      // color: { ...colors.green },
      // actions: this.actions,
    },

  ];

  activeDayIsOpen: boolean = false;


  data() {
    this._stddata.getStdData().subscribe((res: any) => {
      this.mail || this.mail == '' ? this.mail = res[0].email : ' ';
      this.name == '' || this.name ? this.name = res[0].firstName + ' ' + res[0].lastName : '';
      this.id == '' ? this.id = res[0].registerno : '';
      this.gen == '' ? this.gen = res[0].gender : '';
      this.atted == '' ? this.atted = res[0].att_dence : '';
      this.dob == '' ? this.dob = res[0].dob : '';
      this.mobile == 0 || this.mobile ? this.mobile = res[0].mobile : 'kugu';
      this.img == '' ? this.img = res[0].img : '';
      this.add == '' ? this.add = res[0].address : '';
      this.dept == '' ? this.dept = res[0].deptbranch : '';
      this.fatherName == '' ? this.fatherName = res[0].fatherName : '';
      this.fatherMobile == 0 ? this.fatherMobile = res[0].fatherMobile : ''
      this.fatherOccupation == '' ? this.fatherOccupation = res[0].fatherOccupation : '';
      this.motherName == '' ? this.motherName = res[0].motherName : '';
      this.motherMobile == 0 ? this.motherMobile = res[0].motherMobile : '';
      this.motherOccupation == '' ? this.motherOccupation = res[0].motherOccupation : '';
      console.log(res);

    })
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



  nameFunc() {
    if (this.name === '') {
      this.name = 'kotti'
    }
  }


  onSearch() {
    this.search = !this.search
  }

  regSearch(event: any) {
    this._stddata.getSearchData(event.target.value).subscribe((res: any) => {
      this.name = res.firstName + ' ' + res.lastName;
      this.id = res.registerno;
      this.mobile = res.mobile;
      this.mail = res.email;
      this.gen = res.gender;
      this.dob = res.dob;
      this.img = res.img;
      this.add = res.address;
      this.dept = res.deptbranch;
      this.fatherName = res.fatherName;
      this.fatherMobile = res.fatherMobile;
      this.fatherOccupation = res.fatherOccupation;
      this.motherName = res.motherName;
      this.motherMobile = res.motherMobile;
      this.motherOccupation = res.motherOccupation;
    })
  }

  Dept: any = [
    { dept: 'BCA' }
  ]

}