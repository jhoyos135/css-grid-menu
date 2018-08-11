particlesJS.load('particles-js', 'particles.json', function(){
    console.log('particles.json loaded...');
  });

  let myChart_1 = document.querySelector('#first_quarer').getContext('2d');

    Chart.defaults.global.defaultFontFamily = 'PT Sans';
    Chart.defaults.global.defaultFontSize = 12;
    Chart.defaults.global.defaultFontColor = '#fff';

    const newCustomers = new Chart(myChart_1, {
      type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['1', '2', '3', '4', '5', '6'],
        datasets:[{
          label:'First Quater',
          data:[
            4567,
            4563,
            4455,
            6223,
            8786,
            8697
          ],
          lineTension: 0.3,
          pointStyle: "rect",
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderWidth:1,
         
          borderColor:'#fff',
          hoverBorderWidth:1,
          hoverBorderColor:'#333'
        },
        {
          label:'Second Quater',
          data:[
            5645,
            4566,
            4564,
            9652,
            4564,
            2566
          ],
          fill: true,
          backgroundColor:[
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#fff',
          hoverBorderWidth:2,
          hoverBorderColor:'#333'
        }
      ],

      },
      options:{
        title:{
          display:true,
          text:'New Customers',
          fontSize:20
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#fff'
          }
        },
        layout:{ 
          padding:{
            left:0,
            right:0,
            bottom:0,
            top:0
          },
        },
        tooltips:{
          enabled:true
        }
      }
    });

                        

    /*=====VUE SCRIPTS=====*/
    var app = new Vue({
      el: '#app',
      data: {
      
      },
      computed: {

        }
      });

