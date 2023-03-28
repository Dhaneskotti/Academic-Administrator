import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);
import { setOptions } from '@mobiscroll/angular';
import { TechDataService } from '../tech-data.service';
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
import { StudentViewService } from '../../student-view/student-view.service';
export type ChartOptions2 = {
  series_2: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};
setOptions({
  theme: 'ios',
  themeVariant: 'light'
});

@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.scss']
})
export class TeacherViewComponent implements OnInit {

  @ViewChild("chart2") chart2?: ChartComponent;
  public chartOptions2: Partial<ChartOptions2>;

  constructor(public _teachdata: TechDataService) {

    // this._service.getUserData().subscribe(res => {
    //   console.log('rewedrfgtyhjuikokjhgvbnhs', res);
    // })
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
    console.log(this.mail);

  }

  allTeachData = this._teachdata.techTableData
  search: boolean = false;
  name = this._teachdata.name;
  id: string = this._teachdata.id;
  gen: string = this._teachdata.gen;
  atted: any = this._teachdata.atted;
  dob: string = this._teachdata.dob;
  mail: string = this._teachdata.mail;
  mobile: number = this._teachdata.mobile;
  img: string = this._teachdata.img;
  address: string = this._teachdata.address;
  sub: string = this._teachdata.sub;

  searchData: any;

  teach() {
    this._teachdata.getTeachData().subscribe(res => {
      // res.forEach((element: any) => {
      this.mail == '' ? this.mail = res[0].email : ' ';
      this.name == '' ? this.name = res[0].firstName + ' ' + res[0].lastName : '';
      this.id == '' ? this.id = res[0].staffId : '';
      this.gen == '' ? this.gen = res[0].gender : '';
      this.atted == '' ? this.atted = res[0].att_dence : '';
      this.dob == '' ? this.dob = res[0].dob : '';
      this.mobile == 0 ? this.mobile = res[0].mobile : '';
      this.img == '' ? this.img = res[0].img : '';
      this.address == '' ? this.address = res[0].address : '';
      this.sub == '' ? this.sub = res[0].subject : '';
      // });
    })
  }

  ngOnInit(): void {
    this.teach()
    //   var myCharts = new Chart("myChart", {
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


    // if (this.name == '') {
    //   this.name = this.allTeachData[1].name
    // }

  }



  reg(event: any) {
    this.searchData = event.target.value;
    this._teachdata.sendId(event.target.value).subscribe(res => {
      // console.log(res.firstName);
      this.name = res.firstName + ' ' + res.lastName;
      this.id = res.staffId;
      this.mobile = res.mobile;
      this.mail = res.email;
      this.gen = res.gender;
      this.dob = res.dob;
      this.img = res.img;
      this.address = res.address;
      this.sub = res.subject
      event.target.value.length === 0 ? this._teachdata.getTeachData().subscribe(res => {
        this.mail = res[0].email;
        this.name = res[0].firstName + ' ' + res[0].lastName;
        this.id = res[0].staffId;
        this.gen = res[0].gender;
        this.atted = res[0].att_dence;
        this.dob = res[0].dob;
        this.mobile = res[0].mobile;
        this.img = res[0].img;
        this.address = res[0].address;
        this.sub = res[0].subject;
      }) : null
    })
  }

  onSearch() {
    this.search = !this.search
  }


}

