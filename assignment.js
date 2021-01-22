// convert kilometer to meter

   function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;  //1 kilometer = 1000 meter
    return meter;
   }
var result = kilometerToMeter(807);
console.log(result);


 

// buying some important things and their total sum.....

  function budgetCalculator(watchValue, mobileValue, laptopValue){
    var watch = watchValue * 50;
    var mobile = mobileValue * 100;
    var laptop = laptopValue * 500;
    var total = watch + mobile + laptop;
    return total;
}
var result = budgetCalculator(80, 5, 8);
console.log(result);



// spending time in a hotel and total cost of per day stay in hotel.....


 function hotelCost(spendDay){
    var hotelPrice = 0;
    if(spendDay <= 10){
        hotelPrice = spendDay * 100;
    }
    else if(spendDay <= 20){
        var firstTenNight = 10 * 100;
        var remaining = spendDay - 10;
        var secondTenNight = remaining * 80;
        hotelPrice = firstTenNight + secondTenNight;
    }
    else{
        var firstTenNight = 10 * 100;
        var secondTenNight = 10 * 80;
        var remaining = spendDay - 20;
        var thirdTenOrMoreNight = remaining * 50;
        hotelPrice = firstTenNight + secondTenNight + thirdTenOrMoreNight;
    }
    return hotelPrice;
}
var total = hotelCost(25);
console.log(total);


//Find the longest string from a given array....

  function megaFriend(array)
  {
    var maxString = array[0].length;
    var value = array[0];
    for (var i = 1; i < array.length; i++) {
        var maximum = array[i].length;
        if (maximum > maxString) {
            value = array[i];
            maxString = maximum;
        }
      }
    return value;
  }
console.log(megaFriend(["mahi","sultana", "sabiha", "saima", "sadia"]));



