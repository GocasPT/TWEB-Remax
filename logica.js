//SwitchDisplay → Funçao para mostra e remover certas áreas
var switchPower

function SwitchDisplay(IdTaget) {
    if (switchPower == 0){ //Display: none → desaparece
        if (IdTaget === 'content'){
            document.getElementById(IdTaget).parentElement.classList.remove("selected")
        }

        document.getElementById(IdTaget).style.display = "none";
        return switchPower = 1;

    } else { //Diplsa: block → aparece
        if (IdTaget === 'content'){
            document.getElementById(IdTaget).parentElement.classList.add("selected")
        }

        document.getElementById(IdTaget).style.display = "block";
        return switchPower = 0;
    }
} 

//Área do botão "Ver mais" do início
mybutton = document.getElementById("DownButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.visibility = "hide";
        mybutton.style.opacity = "0";
    } else {
        mybutton.style.visibility = "visible";
        mybutton.style.opacity = "1";
    }
}
//Área dos botões "Preview" e "Next"


//Área do "imovel-search"
var areaSlider = document.getElementById("myAreaInput");
var idadeSlider = document.getElementById("myIdadeInput");

var areaOutput = document.getElementById("AreaOutput");
var idadeOutput = document.getElementById("IdadeOutput");

areaOutput.innerHTML = areaSlider.value; // Mostra a o valor default da Área
idadeOutput.innerHTML = idadeSlider.value; // Mostra a o valor default da Idade

// Atualiza o valor quando a barra mexe
areaSlider.oninput = function() {
    areaOutput.innerHTML = this.value;
} 

idadeSlider.oninput = function() {
    idadeOutput.innerHTML = this.value;
}