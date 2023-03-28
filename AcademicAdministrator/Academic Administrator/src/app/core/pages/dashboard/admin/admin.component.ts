import { Component, OnInit,ViewChild } from '@angular/core';
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


const ELEMENT_DATA: PeriodicElement[] = [
  {std_ID: 222009522, name: 'Akash', dept: 'Bsc cs', marks: 350,percentage: 95,Year: 2020},
  {std_ID: 222009522, name: 'Arun', dept: 'Bsc cs', marks: 350,percentage: 95,Year: 2020},
  {std_ID: 222009522, name: 'Dhanes', dept: 'Bsc cs', marks: 350,percentage: 95,Year: 2020},
  {std_ID: 222009522, name: 'Babu', dept: 'Bsc cs', marks: 350,percentage: 95,Year: 2020},
  {std_ID: 222009522, name: 'Rohit', dept: 'Bsc cs', marks: 350,percentage: 95,Year: 2020},
    
];
export interface PeriodicElement {
    std_ID: number;
    name: string;
    dept: string;
    marks: number;
    percentage:number;
    Year:number;
  }

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @ViewChild("chart2") chart2?: ChartComponent;
  public chartOptions2: Partial<ChartOptions2>;

  iconImg1:string="https://preschool.dreamguystech.com/template/assets/img/icons/award-icon-01.svg";
  iconImg2:string="https://preschool.dreamguystech.com/template/assets/img/icons/award-icon-02.svg"
  iconImg3:string="https://preschool.dreamguystech.com/template/assets/img/icons/award-icon-03.svg"
  iconImg4:string="https://preschool.dreamguystech.com/template/assets/img/icons/award-icon-04.svg"

  displayedColumns: string[] = ['ID', 'name', 'dept', 'mark', 'perc', 'year',];
  dataSource = ELEMENT_DATA;

  tableValue(tableRowData:any){
    console.log(tableRowData);
    // this.datarow=tableRowData;
    //table row click function data send to service
    // this._stddata.testData(tableRowData)
  }


  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Boys",
          data: [76, 85, 101, 98, 87, 105, 91]
        },
        {
          name: "Girls",
          data: [35, 41, 36, 26, 45, 48, 52]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius:3,
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          '2016',
          '2017',
          '2018',
          '2019',
          '2020',
          '2021',
          '2022'
        ]
      },
      yaxis: {
        title: {
          text: ""
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            console.log(val); 
            return + val +'';
          }
        }
      }
    };

    this.chartOptions2 = {
      series_2: [44, 55, 41, 17, 15],
      chart: {
        width: '100%',
        type: "donut",
      },

      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient"
      },
      legend: {
        formatter: function(val, opts) {
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
  }

}
