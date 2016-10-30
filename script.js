document.getElementById("button").addEventListener("click", function(){

	var inputAmount = document.getElementById("input-amount");
	var amount = parseFloat(inputAmount.value);

	var inputRate = document.getElementById("input-rate");
	var rate = parseFloat(inputRate.value);

	var amountWithInterestRate = amount * (rate / 100) + amount;

	var wantedAmount = amount * 2;
	var currentAmount = amount || 0;
	var years = 0;
	var loop = false;

	if (amountWithInterestRate > wantedAmount) {
     	currentAmount = amountWithInterestRate;
			return ("After " + years + " year(s) you saved: \u20AC " + currentAmount);
			loop = false;
      console.log(true);
	}
  else {
			do { 
				years++;
 				currentAmount = amountWithInterestRate;
       return (document.getElementById("show-results").innerHTML = ("After " + years + " year(s) you saved: \u20AC " + currentAmount));
        loop = true;
      }
      while (loop);
	}
});


// take a current amount  and calculate amountWithInterestRate
// if amountWithInterestRate > wantedAmount return the years
// else currentAmount = amountWithInterestRate, years++; and continue the loop 


