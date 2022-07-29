const initialPrice=document.querySelector('#initial-price');
const quantityOfStocks=document.querySelector('#quantity');
const currentPrice=document.querySelector('#current-price');
const calculateBtn=document.querySelector('#calculate-btn');
const message=document.querySelector('#output-message');

const profitGif= document.querySelector('.profit-gif');
const lossGif=document.querySelector('.loss-gif');
const NoProfitLossGif=document.querySelector('.noPain-gif');

profitGif.style.display='none';
lossGif.style.display='none';
NoProfitLossGif.style.display='none';

calculateBtn.addEventListener('click',clickHandler);

function calculateProfitLoss(initial,quantity,current){
    if(initial>current){
        let loss=(initial-current)*quantity;
        let lossPercent=(loss/initial)*100;
        output(`Hey the loss is ${loss} and the loss percentage is ${lossPercent.toFixed(2)}%.`);
        ShowLossGif();
        console.log("ok");
    }else if(current>initial){
        let profit=(current-initial)*quantity;
        let profitPercent=(profit/initial)*100;
        output(`Hey the profit is ${profit} and the profit percent is ${profitPercent.toFixed(2)}%.`)

        showProfitGif();

    }else{
        output( `No pain no gain and no gain no pain`);
        showNoPainGif();
    }
}


function output(msg){
    message.innerHTML=msg;
}

function ShowLossGif(){
    lossGif.style.display='block';
    profitGif.style.display='none';
    NoProfitLossGif.style.display='none';


}
function showProfitGif(){
    profitGif.style.display='block';
    lossGif.style.display='none';
    NoProfitLossGif.style.display='none';

}

function showNoPainGif(){
    NoProfitLossGif.style.display='block';
    lossGif.style.display='none';
    profitGif.style.display='none';

}


function clickHandler(){
    let ip_price=Number(initialPrice.value);
    let Qty=Number(quantityOfStocks.value);
    let Cr_price=Number(currentPrice.value);

    if(initialPrice.value && quantityOfStocks.value,currentPrice.value){
        calculateProfitLoss(ip_price,Qty,Cr_price);

    }else{
        output('Please Enter in all the fields.')
    }
}