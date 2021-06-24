//Listen for Submit 
document.getElementById('loan-form').addEventListener('submit', function(e){

  // hide loading
  document.getElementById('results').style.display = 'none';
  
  //show Results
  document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResult, 2000);

    e.preventDefault();
});

//Calculate Results
function calculateResult(){
    
    //UL Elements
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');


    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');


    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment = parseFloat(years.value) * 12;

    // Monthly Payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayment);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly;
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayment) - principal ).toFixed(2);

            //show Results
        document.getElementById('results').style.      display = 'block';
    
       
        //   hide loading
       document.getElementById('loading').style.display = 'none';

    }else{
        showError('Please check the numbers')
    }
}

//show error
function showError(error){

     // hide loading
  document.getElementById('results').style.display = 'none';  
  //show Results
  document.getElementById('loading').style.display = 'none';

  // Creat a div
  const errorDiv = document.createElement('div');
  //Add Class
  errorDiv.className = 'alert alert-danger';
  // Create textNode and append to div 
  errorDiv.appendChild(document.createTextNode(error));


///


}