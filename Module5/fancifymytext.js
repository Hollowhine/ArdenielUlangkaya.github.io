
function Bigger(){
    document.getElementById("textbox").style.fontSize = "24pt";
}

function Fancify(){
    document.getElementById("textbox").style.fontWeight = "Bold";
    document.getElementById("textbox").style.textDecoration="Underline";
    document.getElementById("textbox").style.color = "Blue";
}

function Boring(){
    document.getElementById("textbox").style.fontWeight = "Normal";
    document.getElementById("textbox").style.color = "Black";
    document.getElementById("textbox").style.textDecoration="none";
}
function Moo(){
 
    const text=document.getElementById("textbox").value;
    const CapitalText = text.toUpperCase();
    const splitText=CapitalText.split(".");
    document.getElementById("textbox").value=splitText.join("_Moo");
}