import { Component, Input, OnInit } from '@angular/core';
import { Chapter } from '@src/app/misc/entities/Chapter';
import { Meeting } from '@src/app/misc/entities/Meeting';
import { Chart } from 'chart.js';
//import ChartDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'chapter-result',
  templateUrl: './result.component.html'
})
export class MeetingChaptersResultComponent implements OnInit {

  @Input() chapter: Chapter;
  

  constructor() {
  //   Chart.plugins.unregister(ChartDataLabels);
    }

  ngOnInit(): void {

    // Chart.defaults.set('plugins.datalabels',{
    //   color: '#FE777B'
    // });
    
    const canvas = <HTMLCanvasElement>document.getElementById('myChart');
    const ctx = canvas.getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: ['Pour', 'Contre', 'Abstention'],
        datasets: [
          {
            label: 'Nombre de votes',
            barPercentage: 0.5,
            categoryPercentage: 1.0,
            data: [10, 5, 3],
            backgroundColor: [
              '#36A2EB80',
              '#FF634F80',
              '#FFCE6080'
            ]
          },
        ],
        
      },
      //plugins: [ChartDataLabels],
      options: {
        // plugins:{
        //   datalabels:{color:'#F36A2EB'},
        // },
        responsive : false,
        legend:
        {
          display: false
        },
        scales: {
            xAxes: [{
              ticks: {
                    min: 0, // Edit the value according to what you need
                    display: false
                },
              gridLines: {
                  display: false,
              }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    
                },
                gridLines: {
                display: false,
            }
            }]
        }
          
      }
      
    });
    

  }

}
