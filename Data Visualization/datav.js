window.onload=function(){
    var canvas = document.getElementById("barGraph").getContext("2d");
    var myChart = new Chart(canvas, {
        type: 'horizontalBar',
        data: {
            labels: ["Liam", "Dylan", "Ethan", "Matthew", "Isabella"],
            datasets: [{
                label: "Number of Names Given",
                data: [356,339,332,308,307],
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                borderColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                borderWidth: 1
            }]
        },
        options: {
            title:{
                display: true,
                text: 'Most Popular Hispanic Baby Names (2015)',
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    var canvas = document.getElementById("donutGraph").getContext("2d");
    var myChart = new Chart(canvas, {
        type: 'doughnut',
        data: {
            labels: ["Debt/Capital - 7%","Elected Officials - 3%","University - 7%","Executive - 17%","Other Local Assistance - 16%","School Aid - 26%","Medicaid - 24%"],
            datasets: [{
                label: 'Number of taker',
                data: [7,3,7,17,16,26,24],
                backgroundColor: ["#5694FF","#FF8000","#FFFF00","#00FF00","#00FFFF","#A04DFF","#FF007F"],
                borderColor: ["#5694FF","#FF8000","#FFFF00","#00FF00","#00FFFF","#A04DFF","#FF007F"],
                borderWidth: 1
            }]
        },
        options: {
            title:{
                display: true,
                text: 'State Operating Funds - FY 2022 Executive Amendments - $105.0 Billion',
            },
        }
    });
};
