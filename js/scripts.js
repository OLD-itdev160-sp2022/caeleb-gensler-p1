var opening = 'Welcome back, ';
    username = 'Jacob';
    action = '! Shop our wide selection of Gaming Monitors!'
    greeting = opening + username + action;
    greetingElement = document.getElementById('welcome');

    greetingElement.textContent = greeting;

//sale price

var normalPrice = 300;
    saleVariable = .15;
    salePrice = normalPrice - (normalPrice * saleVariable);
    saleElement = document.getElementById('product-price-sale');

    saleElement.textContent = '$' + salePrice.toFixed(0) + ' - SALE!';

//table stuff
  //Monitor 1
var normalMon1Price = 100;
    mon1SaleVaR = 1;
    if(mon1SaleVaR < 1){
      var salePrice = normalMon1Price - (normalMon1Price * mon1SaleVaR);
      finalPrice = document.getElementById('mon1Price');

      finalPrice.textContent = '$' + salePrice.toFixed(0);
    }
    else{
      var priceElement = document.getElementById('mon1Price');

      priceElement.textContent = '$' + normalMon1Price;
    }

  //Monitor 2
var normalMon2Price = 200;
    mon2SaleVaR = 1;
    if(mon2SaleVaR < 1){
      var salePrice = normalMon2Price - (normalMon2Price * mon3SaleVaR);
      finalPrice = document.getElementById('mon2Price');

      finalPrice.textContent = '$' + salePrice.toFixed(0);
    }
    else{
      var priceElement = document.getElementById('mon2Price');

      priceElement.textContent = '$' + normalMon2Price;
    }

  //Monitor 3
var normalMon3Price = 300;
    mon3SaleVaR = .15;
    if(mon3SaleVaR < 1){
      var salePrice = normalMon3Price - (normalMon3Price * mon3SaleVaR);
      finalPrice = document.getElementById('mon3Price');

      finalPrice.textContent = '$' + salePrice.toFixed(0);
    }
    else{
      var priceElement = document.getElementById('mon3Price');

      priceElement.textContent = '$' + normalMon3Price;
    }

  //Monitor 4
var normalMon4Price = 350;
    mon4SaleVaR = 1;
    if(mon4SaleVaR < 1){
      var salePrice = normalMon4Price - (normalMon4Price * mon4SaleVaR);
      finalPrice = document.getElementById('mon4Price');

      finalPrice.textContent = '$' + salePrice.toFixed(0);
    }
    else{
      var priceElement = document.getElementById('mon4Price');

      priceElement.textContent = '$' + normalMon4Price;
    }