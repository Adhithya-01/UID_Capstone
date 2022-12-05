init();
var initialWeight,selectedWeight;
function func(){
     initialWeight = parseInt(document.getElementById('inWeight').value);
     selectedWeight = document.getElementById('wt').value;   
   if(selectedWeight == "Grams"){
    document.getElementById('Rgrams').textContent = initialWeight;
    document.getElementById('Rkilograms').textContent = (initialWeight/1000).toFixed(4);
    document.getElementById('Rpounds').textContent = (initialWeight*0.0022046).toFixed(4);
    document.getElementById('Rounces').textContent = (initialWeight*0.035274).toFixed(4);
    }
   if(selectedWeight == "KiloGrams"){
    document.getElementById('Rkilograms').textContent = initialWeight;  
    document.getElementById('Rgrams').textContent = (initialWeight*1000).toFixed(4);
    document.getElementById('Rpounds').textContent = (initialWeight*2.2046).toFixed(4);
    document.getElementById('Rounces').textContent = (initialWeight*35.274).toFixed(4);
    } 
   if(selectedWeight == "Pounds"){
    document.getElementById('Rpounds').textContent = initialWeight;
    document.getElementById('Rgrams').textContent = (initialWeight/0.0022046).toFixed(4);
    document.getElementById('Rkilograms').textContent = (initialWeight/2.2046).toFixed(4);
    document.getElementById('Rounces').textContent = (initialWeight*16).toFixed(4);
}
   if(selectedWeight == "Ounces"){
    document.getElementById('Rounces').textContent = (initialWeight).toFixed(4);
    document.getElementById('Rgrams').textContent = (initialWeight/0.035274).toFixed(4);
    document.getElementById('Rkilograms').textContent = (initialWeight/35.274).toFixed(4) ;
    document.getElementById('Rpounds').textContent = (initialWeight*0.0625).toFixed(4);
}
}
function init(){
    document.getElementById('Rgrams').textContent = null;
    document.getElementById('Rkilograms').textContent = null;
    document.getElementById('Rpounds').textContent = null;
    document.getElementById('Rounces').textContent = null;
}
function resetValue(){
    document.getElementById('inWeight').value = null; 
    document.getElementById('wt').value = null;
    
    document.getElementById('Rgrams').textContent = null;
    document.getElementById('Rkilograms').textContent = null;
    document.getElementById('Rpounds').textContent = null;
    document.getElementById('Rounces').textContent = null;
}
function buttonclicked(x){
				document.getElementById("inWeight").value += x;
				}