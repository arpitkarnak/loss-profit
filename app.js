
var initialPrice = document.querySelectorAll('#initial-price');
var stocksQuantity = document.querySelectorAll('#stocks-quantity');
var currentPrice = document.querySelectorAll('#current-price');
var clickBtn = document.querySelector('#click-btn');
var output1 = document.querySelector('#output')



function calculateProfitAndLoss(initial, quantity,current){
    if(initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;

        console.log(`Hey the loss is ${loss} and the percentage is ${lossPercentage}%` )

    }
    else if(initial < current){

        var profit = (current - initial)* quantity;
        var profitPercentage = (profit / initial)*100;

        console.log(`Hey buddy! The Profit is ${profit} and the Percentage is ${profitPercentage}%` )

        
    }
    else {
        console.log(`No pain No Gain & No Gain No Pain`)
    }

}


calculateProfitAndLoss(50,10,10);
calculateProfitAndLoss(10,10,100);
calculateProfitAndLoss(10,10,10);





clickBtn.addEventListener('click',calculateProfitAndLoss)