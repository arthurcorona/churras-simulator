// carne - 400g p/ pessoa || +6 hrs 650g
// cerveja - 1200ml p/ pessoa || +6hrs 2000ml
// refri/água - 1000ml p/pessoa || +6hrs 1500ml
// 1500 de carvao p/ pessoa

// crianças valem por 0,5

        //linkando o script nos IDs no HTML
    let inputAdultos = document.getElementById("adultos")
    let inputCriancas = document.getElementById("criancas")
    let inputHoras = document.getElementById("horas")

    let resultado = document.getElementById("resultado")

        //calculando a carne por pessoa
    function calcular(){
        console.log("calculando...");

        let adultos = inputAdultos.value
        let criancas = inputCriancas.value
        let horas = inputHoras.value

        let qtdTotalCarne = carnePP(horas) * adultos + (carnePP(horas)/ 2 * criancas)
        let qtdTotalCerveja = cervejaPP(horas) * adultos
        let qtdTotalBebidas = bebidaPP(horas) * adultos + (bebidaPP(horas)/ 2 * criancas)
        let qtdTotalCarvao = carvaoPP(horas) * adultos + (bebidaPP(horas)/ 2 * criancas)


        resultado.innerHTML += `<p>${Math.ceil(qtdTotalCarne/1000)} Kg de Carne`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} Latas de Cerveja`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/1000)} L de Refrigerantes/Sucos`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalCarvao/1000)} Kg de Carvão`


    }


        //calculando as horas de churras
    function carnePP(horas){
        if(horas >= 6){
            return 650
        }
        else{
            return 400
            }
    }

        //calculando a cerveja por pessoa
    function cervejaPP(horas){
        if(horas >= 6){
            return 2000 
        }
        else{
            return 1200
            }
    }

        //calculando refris/água
    function bebidaPP(horas){
        if(horas >= 6){
            return 1500
        }
        else{
            return 1000
            }
    }

    function carvaoPP(carnePP){

    
            return 1300
        
       
    }

    // tentando fazer o botao aparecer depois

    function openResult(){

        var rslt = document.getElementById("resultado")
        rslt.onclick = rslt.style.display= "block"
    }



