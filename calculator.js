function calculation(){
    var electricity_consume=document.getElementById("elect").value;
    a=electricity_consume*0.947;

    var nat=document.getElementById("natural").value;
    b=nat* 0.18;

    var oil_used=document.getElementById("oil").value;
    c=oil_used*0.27;

    var gas=document.getElementById("lpg").value;
    d=gas*0.25;

    var waste_material=document.getElementById("waste").value;
    e=waste_material*0.25;

    var water_consume=document.getElementById("water").value;
    f=water_consume*0.21;
    var result=a+b+c+d+e+f;
    console.log(result)

     var displayv = document.getElementById("display")
     displayv.value=result;

   
    
}c