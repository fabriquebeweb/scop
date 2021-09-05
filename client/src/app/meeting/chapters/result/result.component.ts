import { Component, OnInit } from '@angular/core'
import { Chart } from 'chart.js'

@Component({
  selector: 'chapter-result',
  templateUrl: './result.component.html'
})
export class MeetingChaptersResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const canvas = <HTMLCanvasElement>document.getElementById('myChart')
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
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
      options: {
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

    })


  }

}
