
var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var clickBtn = document.querySelector('#click-btn');
var output1 = document.querySelector('.output');



clickBtn.addEventListener('click',submitHandler)


function submitHandler(){

    
 
    var intPrice = Number(initialPrice.value);
    var quant = Number(stocksQuantity.value)
   
    var currPrice = Number(currentPrice.value);

    calculateProfitAndLoss(intPrice,quant,currPrice)
}



function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }





function calculateProfitAndLoss(initial,quantity,current){

    if(initial==''){

        output1.style.display="block";
        output1.style.color="white";
        output1.style.background="rgba(132, 190, 230, 0.6)";

        output1.innerText="Please Fill All the Value"

    }
    else if(current==''){

        output1.style.display="block";
        output1.style.color="white";
        output1.style.background="rgba(132, 190, 230, 0.6)";

        output1.innerText="Please Fill All the Value "

    }
    else if(quantity==''){

        output1.style.display="block";
        output1.style.color="white";
        output1.style.background="rgba(132, 190, 230, 0.6)";

        output1.innerText="Please Fill All the Value"

    }
    else if(initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        var fixLossPercentage = financial(lossPercentage);
        output1.style.display="block";
        output1.style.color="green";
        output1.style.background="rgba(132, 190, 230, 0.6)";

        output1.innerText =`Total Loss : '${loss}' & Loss Percentage: ${fixLossPercentage}%`
        
        // console.log(`Hey the loss is ${loss} and the percentage is ${lossPercentage}%` )

    } 

    else if(current > initial){

        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial)*100;
        var fixProfitPercentage = financial(profitPercentage);

        output1.style.display="block";
        output1.style.color="red";
        output1.style.background="rgba(132, 190, 230, 0.6)";


        output1.innerText =`Total Profit: "${profit}" & Profit Percentage : ${fixProfitPercentage}%`


        // console.log(`Hey buddy! The Profit is ${profit} and the Percentage is ${profitPercentage}%` )

        
    }
    else {

        output1.style.display="block";
        output1.style.color="white";
        output1.style.background="rgba(132, 190, 230, 0.6)";

        output1.innerText = `No pain No Gain & No Gain No Pain`
        // console.log(`No pain No Gain & No Gain No Pain`)
    }

}


// calculateProfitAndLoss(50,10,10);
// calculateProfitAndLoss(10,10,100);
// calculateProfitAndLoss(10,10,10);





