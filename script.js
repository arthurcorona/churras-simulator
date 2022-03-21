// carne - 400g p/ pessoa || +6 hrs 650g
// cerveja - 1200ml p/ pessoa || +6hrs 2000ml
// refri/água - 1000ml p/pessoa || +6hrs 1500ml
// 1500 de carvao p/ pessoa

// Lembrando que os adultos que bembem cerveja tambem estao bebendo outras bebidas, entao os inclui! 

// crianças valem por 0,5

        //linkando o script nos IDs no HTML
    let inputAdultos = document.getElementById("adultos")
    let inputCriancas = document.getElementById("criancas")
    let inputHoras = document.getElementById("horas")

    let resultado = document.getElementById("resultado")

        //calculando a carne por pessoa
    function result(){
        console.log("calculando...");

        let adultos = inputAdultos.value
        let criancas = inputCriancas.value
        let horas = inputHoras.value

        let qtdTotalCarne = carnePP(horas) * adultos + (carnePP(horas)/ 2 * criancas)
        let qtdTotalCerveja = cervejaPP(horas) * adultos
        let qtdTotalBebidas = bebidaPP(horas) * adultos + (bebidaPP(horas)/ 2 * criancas) / 2
        let qtdTotalCarvao = carvaoPP(horas) * adultos + (bebidaPP(horas)/ 2 * criancas)


        resultado.innerHTML += `<p><img src="./assets/meat.png" type="image/png" width="20px"></img> ${Math.ceil(qtdTotalCarne/1000)} Kg de Carne <br>`
        resultado.innerHTML += `<p><img src="./assets/beer.png" type="image/png" width="20px"></img> ${Math.ceil(qtdTotalCerveja/355)} Latas de Cerveja <br>`
        resultado.innerHTML += `<p><img src="./assets/soda.png" type="image/png" width="20px"></img> ${Math.ceil(qtdTotalBebidas/1000)} L de Refrigerantes/Sucos <br>`
        resultado.innerHTML += `<p><img src="./assets/coal.png" type="image/png" width= "20px"></img> ${Math.ceil(qtdTotalCarvao/1000)} Kg de Carvão <br>`

        // alerta de preencher os campos
        
        var rslt = document.getElementById("resultado")
        rslt.onclick = rslt.style.display= "block"

        if(adultos <= 0, horas <= 0)
        alert("Atualize a página e preencha os campos corretamente!")
        

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

   


