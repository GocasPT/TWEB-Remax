//Área dos botões "Preview" e "Next"


//Área do "imovel-search"
    var areaSlider = document.getElementById("myAreaInput");
    var idadeSlider = document.getElementById("myIdadeInput");

    var areaOutput = document.getElementById("AreaOutput");
    var idadeOutput = document.getElementById("IdadeOutput");

    areaOutput.innerHTML = areaSlider.value; // Mostra a o valor default da Área (50)
    idadeOutput.innerHTML = idadeSlider.value; // Mostra a o valor default da Idade (50)

    // Atualiza o valor quando a barra mexe
    areaSlider.oninput = function() {
        areaOutput.innerHTML = this.value;
    } 

    idadeSlider.oninput = function() {
        idadeOutput.innerHTML = this.value;
    }

//Área do "cenarios"
    