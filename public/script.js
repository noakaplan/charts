var ctx = document.getElementById('allStrategies').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["BTC", "ETH", "LTE", "REP", "ICN", "GNO", "XMR", "DASH               ", "XRP"],
        datasets: [
        {
            label: "COINBASE",
            borderCapStyle: "round",
            pointBackgroundColor:'rgba(0, 0, 0, 0)',
            pointBorderColor:'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(255, 255, 255, 1)',
            backgroundColor: [
                'rgba(50, 100, 150, .3)',
                'rgba(50, 125, 150, .3)',
                'rgba(50, 150, 150, .3)',
                'rgba(50, 150, 125, .3)',
                'rgba(50, 150, 100, .3)',
                'rgba(75, 150, 100, .3)',
                'rgba(75, 150, 100, .3)',
                'rgba(75, 125, 100, .3)',
                'rgba(75, 100, 100, .3)',
            ],
            
            data: [2, 3, 2, 2, 1, 2, 0, 0, 0]
        },
        {
            label: "JAXX",
            borderCapStyle: "round",
            pointBackgroundColor:'rgba(0, 0, 0, 0)',
            pointBorderColor:'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(255, 255, 255, 1)',
            backgroundColor: [
                'rgba(50, 100, 150, .4)',
                'rgba(50, 125, 150, .4)',
                'rgba(50, 150, 150, .4)',
                'rgba(50, 150, 125, .4)',
                'rgba(50, 150, 100, .4)',
                'rgba(75, 150, 100, .4)',
                'rgba(75, 150, 100, .4)',
                'rgba(75, 125, 100, .4)',
                'rgba(75, 100, 100, .4)',
            ],
            
            data: [6, 5, 10, 0, 0, 4, 2, 1, 5]
        },

        {
            label: "BITGO",
            borderCapStyle: "round",
            pointBackgroundColor:'rgba(0, 0, 0, 0)',
            pointBorderColor:'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(255, 255, 255, 1)',
            backgroundColor: [
                'rgba(50, 100, 150, .5)',
                'rgba(50, 125, 150, .5)',
                'rgba(50, 150, 150, .5)',
                'rgba(50, 150, 125, .5)',
                'rgba(50, 150, 100, .5)',
                'rgba(75, 150, 100, .5)',
                'rgba(75, 150, 100, .5)',
                'rgba(75, 125, 100, .5)',
                'rgba(75, 100, 100, .5)',
            
            ],
            
            data: [4, 5, 10, 0, 0, 4, 1, 0, 1]
        },
        {
            label: "ETH WALLET",
            borderCapStyle: "round",
            pointBackgroundColor:'rgba(0, 0, 0, 0)',
            pointBorderColor:'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(255, 255, 255, 1)',
            backgroundColor: [
                'rgba(50, 100, 150, .6)',
                'rgba(50, 125, 150, .6)',
                'rgba(50, 150, 150, .6)',
                'rgba(50, 150, 125, .6)',
                'rgba(50, 150, 100, .6)',
                'rgba(75, 150, 100, .6)',
                'rgba(75, 150, 100, .6)',
                'rgba(75, 125, 100, .6)',
                'rgba(75, 100, 100, .6)',
            
            ],
            
            data: [0, 8, 0, 2, 2, 1, 0, 0, 0]
        },

        {
            label: "LEDGER",
            borderCapStyle: "round",
            pointBackgroundColor:'rgba(0, 0, 0, 0)',
            pointBorderColor:'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(255, 255, 255, 1)',
            backgroundColor: [
                'rgba(50, 100, 150, .7)',
                'rgba(50, 125, 150, .7)',
                'rgba(50, 150, 150, .7)',
                'rgba(50, 150, 125, .7)',
                'rgba(50, 150, 100, .7)',
                'rgba(75, 150, 100, .7)',
                'rgba(75, 150, 100, .7)',
                'rgba(75, 125, 100, .7)',
                'rgba(75, 100, 100, .7)',
            ],
            
            data: [0, 4, 2, 2, 0, 0, 1, 1, 1]
        },

        {
            label: "TREZOR",
            borderCapStyle: "round",
            pointBackgroundColor:'rgba(0, 0, 0, 0)',
            pointBorderColor:'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(255, 255, 255, 1)',
            backgroundColor: [
                'rgba(50, 100, 150, .8)',
                'rgba(50, 125, 150, .8)',
                'rgba(50, 150, 150, .8)',
                'rgba(50, 150, 125, .8)',
                'rgba(50, 150, 100, .8)',
                'rgba(75, 150, 100, .8)',
                'rgba(75, 150, 100, .8)',
                'rgba(75, 125, 100, .8)',
                'rgba(75, 100, 100, .8)',
            ],
            
            data: [10, 50, 2, 1, 4, 4, 1, 5, 10]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: true,
            position: "left",
            labels: {
                fontColor: 'rgb(0, 0, 0)',
                padding: 10,
                boxWidth: 12,
            }
        }
    }
});