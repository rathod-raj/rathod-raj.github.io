var ctx = document.getElementById('bar-graph').getContext('2d');
var chart = new Chart(ctx, 
    {    
   
        type: 'bar',
      data:
     {
        labels: ['20', '', '25', '', '30', '', '35', '', '40', '', '60', '' , '65'],
        datasets: 
        [{
            label: 'Employer : K 73,500',
            backgroundColor: '#0800A3',
            borderColor: '#0800A3',
            data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70]
        },
      
        {
            label: 'Employee: K 52500',
            backgroundColor: '#4935FF',
            borderColor: '#4935FF',
            data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70]
        },
      
        {
            label: 'Total Interest: K 244,313',
            backgroundColor: '#85AFFF',
            borderColor: '#85AFFF',
            data: [20, 20, 25, 25, 30, 40, 60, 80, 90, 110, 130, 140, 160]
        }
    ]
    },
    options: 
    {
        responsive : true,
        maintainAspectRatio: false,
        scales: 
        {
            xAxes: 
            [{
                stacked: true,
                gridLines:
                {
                    drawOnChartArea: false
                },
                barPercentage: 0.7
            }],
            yAxes: 
            [{
                stacked: true,
                ticks : 
                {
                    max : 300,
                    min : 0,
                    stepSize : 100
                },
                gridLines: {
                    drawOnChartArea: false
                }
            }]
        },
        legend : 
        {
            display : true,
            labels : 
            {
                boxWidth: 20,
                padding : 20,
            }
        }
    }
});
