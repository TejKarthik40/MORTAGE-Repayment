function calculate(){
    const amount=parseFloat(document.getElementById("amount").value);
    const years=parseInt(document.getElementById("years").value);
    const interest=parseFloat(document.getElementById("interest").value) /100;
    const typeInput =document.querySelector('input[name="Mortgagetype"]:checked');
    const res=document.getElementById("res");
    if(!amount || !years || !interest || !typeInput){ 
        res.innerHTML ="Please fill all the fields";
        return;
    }
    const type = typeInput.value;
    let monthly;
    if(type === "Repayment"){
        var n= years *12;
        var r= interest/12;
        monthly = (amount*r) / (1-Math.pow(1+r,-n));
    }
    else{
        monthly=(amount * interest)/12;
    }
   res.innerHTML=`<h2>Monthly Repayment</h2>
                    <p><b>$ ${monthly.toFixed(2)}</b></p>
                    <h2>Total you will repay over the term  $ ${(monthly*years*12).toFixed(2)}`;
}
function reset(){
    document.getElementById("amount").value='';
    document.getElementById("years").value='';
    document.getElementById("interest").value='';   
    document.querySelector('input[name="Mortgagetype"]:checked').checked = false;
    document.getElementById("res").innerHTML=`<p><b>Results shown here</b></p><p>Complete filling the form and click "Calculate Repayments" to see what your monthly repayments would be.</p>`;
}