var euh1;
var euh2;
var euh3;
var euh4;
var euh5;
var euh6;
var euh7;
var euh8;
var euh9;
var euh10;
var euh11;
var euh12;
var euh13;
var euh14;
var euh15;
var euh16;
var euh17;
var euh18;
var euh19;
var euh20;
var euh21;
var euh22;
var euh23;
var euh24;
var euh25;
var euh26;
var euh27;
var euh28;
var euh29;
var euh30;
var euh31;

var che1;
var che2;
var che3;
var che4;
var che5;
var che6;
var che7;
var che8;
var che9;
var che10;
var che11;
var che12;
var che13;
var che14;
var che15;
var che16;
var che17;
var che18;
var che19;
var che20;
var che21;
var che22;
var che23;
var che24;
var che25;
var che26;
var che27;
var che28;
var che29;
var che30;
var che31;

var num1;
var num2;
var num3;
var num4;
var num5;
var num6;
var num7;
var num8;
var num9;
var num10;
var num11;
var num12;
var num13;
var num14;
var num15;
var num16;
var num17;
var num18;
var num19;
var num20;
var num21;
var num22;
var num23;
var num24;
var num25;
var num26;
var num27;
var num28;
var num29;
var num30;
var num31;
var Totale;

var Ore_lavorative

var euro_ora;

function validate(){
che1 =document.getElementById('check1').checked;
che2 =document.getElementById('check2').checked;
che3 =document.getElementById('check3').checked;
che4 =document.getElementById('check4').checked;
che5 =document.getElementById('check5').checked;
che6 =document.getElementById('check6').checked;
che7 =document.getElementById('check7').checked;
che8 =document.getElementById('check8').checked;
che9 =document.getElementById('check9').checked;
che10 =document.getElementById('check10').checked;
che11 =document.getElementById('check11').checked;
che12 =document.getElementById('check12').checked;
che13 =document.getElementById('check13').checked;
che14 =document.getElementById('check14').checked;
che15 =document.getElementById('check15').checked;
che16 =document.getElementById('check16').checked;
che17 =document.getElementById('check17').checked;
che18 =document.getElementById('check18').checked;
che19 =document.getElementById('check19').checked;
che20 =document.getElementById('check20').checked;
che21 =document.getElementById('check21').checked;
che22 =document.getElementById('check22').checked;
che23 =document.getElementById('check23').checked;
che24 =document.getElementById('check24').checked;
che25 =document.getElementById('check25').checked;
che26 =document.getElementById('check26').checked;
che27 =document.getElementById('check27').checked;
che28 =document.getElementById('check28').checked;
che29 =document.getElementById('check29').checked;
che30 =document.getElementById('check30').checked;
che31 =document.getElementById('check31').checked;


localStorage.setItem("che1",che1);
localStorage.setItem("che2",che2);
localStorage.setItem("che3",che3);
localStorage.setItem("che4",che4);
localStorage.setItem("che5",che5);
localStorage.setItem("che6",che6);
localStorage.setItem("che7",che7);
localStorage.setItem("che8",che8);
localStorage.setItem("che9",che9);
localStorage.setItem("che10",che10);
localStorage.setItem("che11",che11);
localStorage.setItem("che12",che12);
localStorage.setItem("che13",che13);
localStorage.setItem("che14",che14);
localStorage.setItem("che15",che15);
localStorage.setItem("che16",che16);
localStorage.setItem("che17",che17);
localStorage.setItem("che18",che18);
localStorage.setItem("che19",che19);
localStorage.setItem("che20",che20);
localStorage.setItem("che21",che21);
localStorage.setItem("che22",che22);
localStorage.setItem("che23",che23);
localStorage.setItem("che24",che24);
localStorage.setItem("che25",che25);
localStorage.setItem("che26",che26);
localStorage.setItem("che27",che27);
localStorage.setItem("che28",che28);
localStorage.setItem("che29",che29);
localStorage.setItem("che30",che30);
localStorage.setItem("che31",che31);


Ore_lavorative=parseInt(document.getElementById('ore').value);
localStorage.setItem("euro_ora",Ore_lavorative);


if(che1 == true ){
    euh1= parseInt(document.getElementById('eh1').value);
    localStorage.setItem("euh1",euh1); 
    console.log("euh1:",euh1);
}else{
    euh1=0;
}

if(che2 == true){
    euh2= parseInt(document.getElementById('eh2').value);
    localStorage.setItem("euh2",euh2); 
    console.log("euh2:",euh3);
}else{
    euh2=0;
}

if(che3 == true){
    euh3= parseInt(document.getElementById('eh3').value);
    localStorage.setItem("euh3",euh3); 
    console.log("euh3:",euh3);
}else{
    euh3=0;
}

if(che4 == true){
    euh4= parseInt(document.getElementById('eh4').value);
    localStorage.setItem("euh4",euh4); 
    console.log("euh4:",num4);
}else{
    euh4=0;
}

if(che5 == true){
    euh5= parseInt(document.getElementById('eh5').value);
    localStorage.setItem("euh5",euh5); 
    console.log("euh5:",euh5);
}else{
    euh5=0;
}
if(che6 == true ){
    euh6= parseInt(document.getElementById('eh6').value);
    localStorage.setItem("euh6",euh6); 
    console.log("euh6:",euh6);
}else{
    euh6=0;
}

if(che7 == true){
    euh7= parseInt(document.getElementById('eh7').value);
    localStorage.setItem("euh7",euh7); 
    console.log("euh7:",euh7);
}else{
    euh7=0;
}

if(che8 == true){
    euh8= parseInt(document.getElementById('eh8').value);
    localStorage.setItem("euh8",euh8); 
    console.log("euh8:",euh8);
}else{
    euh8=0;
}

if(che9 == true){
    euh9= parseInt(document.getElementById('eh9').value);
    localStorage.setItem("euh9",euh9); 
    console.log("euh9:",euh9);
}else{
    num9=0;
}

if(che10 == true){
    euh10= parseInt(document.getElementById('eh10').value);
    localStorage.setItem("euh10",euh10); 
    console.log("euh10:",euh10);
}else{
    euh10=0;
}
if(che11 == true ){
    euh11= parseInt(document.getElementById('eh11').value);
    localStorage.setItem("euh11",euh11); 
    console.log("euh11:",euh11);
}else{
    euh11=0;
}

if(che12 == true){
    euh12= parseInt(document.getElementById('eh12').value);
    localStorage.setItem("euh12",euh12); 
    console.log("euh12:",euh12);
}else{
    euh12=0;
}

if(che13 == true){
    euh13= parseInt(document.getElementById('eh13').value);
    localStorage.setItem("euh13",euh13); 
    console.log("euh13:",euh13);
}else{
    euh13=0;
}

if(che14 == true){
    euh14= parseInt(document.getElementById('eh14').value);
    localStorage.setItem("euh14",euh14); 
    console.log("euh14:",euh14);
}else{
    euh14=0;
}

if(che15 == true){
    euh15= parseInt(document.getElementById('eh15').value);
    localStorage.setItem("euh15",euh15); 
    console.log("euh15:",euh15);
}else{
    euh15=0;
}
if(che16 == true ){
    euh16= parseInt(document.getElementById('eh16').value);
    localStorage.setItem("euh16",euh16); 
    console.log("euh16:",euh16);
}else{
    euh16=0;
}

if(che17 == true){
    euh17= parseInt(document.getElementById('eh17').value);
    localStorage.setItem("euh17",euh17); 
    console.log("euh17:",euh17);
}else{
    euh17=0;
}

if(che18 == true){
    euh18= parseInt(document.getElementById('eh18').value);
    localStorage.setItem("euh18",euh18); 
    console.log("euh18:",euh18);
}else{
    euh18=0;
}

if(che19 == true){
    euh19= parseInt(document.getElementById('eh19').value);
    localStorage.setItem("euh19",euh19); 
    console.log("euh19:",euh19);
}else{
    euh19=0;
}

if(che20 == true){
    euh20= parseInt(document.getElementById('eh20').value);
    localStorage.setItem("euh20",euh20); 
    console.log("euh20:",euh20);
}else{
    euh20=0;
}
if(che21 == true ){
    euh21= parseInt(document.getElementById('eh21').value);
    localStorage.setItem("euh21",euh21); 
    console.log("euh21:",euh21);
}else{
    euh21=0;
}

if(che22 == true){
    euh22= parseInt(document.getElementById('eh22').value);
    localStorage.setItem("euh22",euh22); 
    console.log("euh22:",euh22);
}else{
    euh22=0;
}

if(che23 == true){
    euh23= parseInt(document.getElementById('eh23').value);
    localStorage.setItem("euh23",euh23);
    console.log("euh23:",euh23);
}else{
    euh23=0;
}

if(che24 == true){
    euh24= parseInt(document.getElementById('eh24').value);
    localStorage.setItem("euh24",euh24);
    console.log("euh24:",euh24);
}else{
    euh24=0;
}

if(che25 == true){
    euh25= parseInt(document.getElementById('eh25').value);
    localStorage.setItem("euh25",euh25);
    console.log("euh25:",euh25);
}else{
    euh25=0;
}
if(che26 == true ){
    euh26= parseInt(document.getElementById('eh26').value);
    localStorage.setItem("euh26",euh26);
    console.log("euh26:",euh26);
}else{
    euh26=0;
}

if(che27 == true){
    euh27= parseInt(document.getElementById('eh27').value);
    localStorage.setItem("euh27",euh27);
    console.log("euh27:",euh27);
}else{
    euh27=0;
}

if(che28 == true){
    euh28= parseInt(document.getElementById('eh28').value);
    localStorage.setItem("euh28",euh28);
    console.log("euh28:",euh28);
}else{
    euh28=0;
}

if(che29 == true){
    euh29= parseInt(document.getElementById('eh29').value);
    localStorage.setItem("euh29",euh29);
    console.log("euh29:",euh29);
}else{
    euh29=0;
}

if(che30 == true){
    euh30= parseInt(document.getElementById('eh30').value);
    localStorage.setItem("euh30",euh30);
    console.log("euh30:",euh30);
}else{
    euh30=0;
}
if(che31 == true){
    euh31= parseInt(document.getElementById('eh31').value);
    localStorage.setItem("euh31",euh31);
    console.log("euh31:",euh31);
}else{
    num31=0;
}
}


function totale(){
    Totale= (euh1+euh2+euh3+euh4+euh5+euh6+euh7+euh8+euh9+euh10+euh11+euh12+euh13+euh14+euh15+euh16+euh17+euh18+euh19+euh20+euh21+euh22+euh23+euh24+euh25+euh26+euh27+euh28+euh29+euh30+euh31)*Ore_lavorative;
    document.getElementById('totale').innerHTML=Totale+"€";
    localStorage.setItem("totale",Totale)
    console.log("Totale: ",Totale);
}

function caricamento(){
    che1=JSON.parse(localStorage.getItem("che1"));
    che2=JSON.parse(localStorage.getItem("che2"));
    che3=JSON.parse(localStorage.getItem("che3"));
    che4=JSON.parse(localStorage.getItem("che4"));
    che5=JSON.parse(localStorage.getItem("che5"));
    che6=JSON.parse(localStorage.getItem("che6"));
    che7=JSON.parse(localStorage.getItem("che7"));
    che8=JSON.parse(localStorage.getItem("che8"));
    che9=JSON.parse(localStorage.getItem("che9"));
    che10=JSON.parse(localStorage.getItem("che10"));
    che11=JSON.parse(localStorage.getItem("che11"));
    che12=JSON.parse(localStorage.getItem("che12"));
    che13=JSON.parse(localStorage.getItem("che13"));
    che14=JSON.parse(localStorage.getItem("che14"));
    che15=JSON.parse(localStorage.getItem("che15"));
    che16=JSON.parse(localStorage.getItem("che16"));
    che17=JSON.parse(localStorage.getItem("che17"));
    che18=JSON.parse(localStorage.getItem("che18"));
    che19=JSON.parse(localStorage.getItem("che19"));
    che20=JSON.parse(localStorage.getItem("che20"));
    che21=JSON.parse(localStorage.getItem("che21"));
    che22=JSON.parse(localStorage.getItem("che22"));
    che23=JSON.parse(localStorage.getItem("che23"));
    che24=JSON.parse(localStorage.getItem("che24"));
    che25=JSON.parse(localStorage.getItem("che25"));
    che26=JSON.parse(localStorage.getItem("che26"));
    che27=JSON.parse(localStorage.getItem("che27"));
    che28=JSON.parse(localStorage.getItem("che28"));
    che29=JSON.parse(localStorage.getItem("che29"));
    che30=JSON.parse(localStorage.getItem("che30"));
    che31=JSON.parse(localStorage.getItem("che31"));

    Ore_lavorative=+localStorage.getItem("euro_ora");

    Totale=+localStorage.getItem("totale");

    euh1=+localStorage.getItem("euh1");
    euh2=+localStorage.getItem("euh2");
    euh3=+localStorage.getItem("euh3");
    euh4=+localStorage.getItem("euh4");
    euh5=+localStorage.getItem("euh5");
    euh6=+localStorage.getItem("euh6");
    euh7=+localStorage.getItem("euh7");
    euh8=+localStorage.getItem("euh8");
    euh9=+localStorage.getItem("euh9");
    euh10=+localStorage.getItem("euh10");
    euh11=+localStorage.getItem("euh11");
    euh12=+localStorage.getItem("euh12");
    euh13=+localStorage.getItem("euh13");
    euh14=+localStorage.getItem("euh14");
    euh15=+localStorage.getItem("euh15");
    euh16=+localStorage.getItem("euh16");
    euh17=+localStorage.getItem("euh17");
    euh18=+localStorage.getItem("euh18");
    euh19=+localStorage.getItem("euh19");
    euh20=+localStorage.getItem("euh20");
    euh21=+localStorage.getItem("euh21");
    euh22=+localStorage.getItem("euh22");
    euh23=+localStorage.getItem("euh23");
    euh24=+localStorage.getItem("euh24");
    euh25=+localStorage.getItem("euh25");
    euh26=+localStorage.getItem("euh26");
    euh27=+localStorage.getItem("euh27");
    euh28=+localStorage.getItem("euh28");
    euh29=+localStorage.getItem("euh29");
    euh30=+localStorage.getItem("euh30");
    euh31=+localStorage.getItem("euh31");
    
    
    document.getElementById('check1').checked=che1;
    document.getElementById('check2').checked=che2;
    document.getElementById('check3').checked=che3;
    document.getElementById('check4').checked=che4;
    document.getElementById('check5').checked=che5;
    document.getElementById('check6').checked=che6;
    document.getElementById('check7').checked=che7;
    document.getElementById('check8').checked=che8;
    document.getElementById('check9').checked=che9;
    document.getElementById('check10').checked=che10;
    document.getElementById('check11').checked=che11;
    document.getElementById('check12').checked=che12;
    document.getElementById('check13').checked=che13;
    document.getElementById('check14').checked=che14;
    document.getElementById('check15').checked=che15;
    document.getElementById('check16').checked=che16;
    document.getElementById('check17').checked=che17;
    document.getElementById('check18').checked=che18;
    document.getElementById('check19').checked=che19;
    document.getElementById('check20').checked=che20;
    document.getElementById('check21').checked=che21;
    document.getElementById('check22').checked=che22;
    document.getElementById('check23').checked=che23;
    document.getElementById('check24').checked=che24;
    document.getElementById('check25').checked=che25;
    document.getElementById('check26').checked=che26;
    document.getElementById('check27').checked=che27;
    document.getElementById('check28').checked=che28;
    document.getElementById('check29').checked=che29;
    document.getElementById('check30').checked=che30;
    document.getElementById('check31').checked=che31;

    document.getElementById('ore').value=Ore_lavorative;

    document.getElementById('totale').innerHTML=Totale+"€";

    document.getElementById('eh1').value=euh1;
    document.getElementById('eh2').value=euh2;
    document.getElementById('eh3').value=euh3;
    document.getElementById('eh4').value=euh4;
    document.getElementById('eh5').value=euh5;
    document.getElementById('eh6').value=euh6;
    document.getElementById('eh7').value=euh7;
    document.getElementById('eh8').value=euh8;
    document.getElementById('eh9').value=euh9;
    document.getElementById('eh10').value=euh10;
    document.getElementById('eh11').value=euh11;
    document.getElementById('eh12').value=euh12;
    document.getElementById('eh13').value=euh13;
    document.getElementById('eh14').value=euh14;
    document.getElementById('eh15').value=euh15;
    document.getElementById('eh16').value=euh16;
    document.getElementById('eh17').value=euh17;
    document.getElementById('eh18').value=euh18;
    document.getElementById('eh19').value=euh19;
    document.getElementById('eh20').value=euh20;
    document.getElementById('eh21').value=euh21;
    document.getElementById('eh22').value=euh22;
    document.getElementById('eh23').value=euh23;
    document.getElementById('eh24').value=euh24;
    document.getElementById('eh25').value=euh25;
    document.getElementById('eh26').value=euh26;
    document.getElementById('eh27').value=euh27;
    document.getElementById('eh28').value=euh28;
    document.getElementById('eh29').value=euh29;
    document.getElementById('eh30').value=euh30;
    document.getElementById('eh31').value=euh31;
}