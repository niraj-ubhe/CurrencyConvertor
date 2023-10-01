
let inputCurrType = document.getElementById("inputCurrType");
let outputCurrType = document.getElementById("outputCurrType");
let inputAmt = document.getElementById("inputAmt");
let outputAmt = document.getElementById("outputAmt");
let convertBtn = document.getElementById("convertCurrBtn")

async function fetchData(){
    let typeOne = inputCurrType.value;
    let typeTwo = outputCurrType.value;
    let userAmt = inputAmt.value; 
    
    try{
        let response = await fetch(`https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${typeOne}&want=${typeTwo}&amount=${userAmt}`,
          {
            headers: {
                'X-RapidAPI-Key': 'a542411a05mshba18738513f75fdp1d5a98jsn1f016e88b537',
                'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
            }
    }
    ); let data = await response.json();
    let newAmt = data.new_amount;
    outputAmt.value = newAmt;
    if(inputAmt.value == "0"){
        alert("INPUT VALUE CANNOT BE ZERO")
        inputAmt.value = "1"
    }

}
catch (error) {
        console.error(error);
    }
}

function clean(){
    outputAmt.value = 0;
    inputAmt.value = 0;
}


inputCurrType.addEventListener('change', clean)
outputCurrType.addEventListener('change', clean)
inputAmt.addEventListener('input', fetchData)
outputAmt.addEventListener('input', fetchData)
convertBtn.addEventListener('click', fetchData)
