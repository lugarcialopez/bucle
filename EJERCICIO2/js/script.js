var texto = "";
var i =0;

while (i<100) {

    i=i+2;
    texto=texto+i+"<br>";
    
  
}

document.getElementById("bucle").innerHTML=texto;

var letra = "";
var index=0;
var stockZapatillas=["Merrel:20" , "Adidas:35" , "Nike:15"]

while (index <3)
{
    letra=letra+stockZapatillas[index]+"<br>";
    index=index++;
}

document.getElementById("par").innerHTML=stockZapatillas;

