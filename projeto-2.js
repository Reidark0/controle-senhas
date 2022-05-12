/* Submit to add a new Login and Password*/
function mudarLocal(inputElement,local){
    message = local
    inputElement.querySelector("#local").textContent = local
}
function mudarConta (inputElement, conta){
    message = conta
    inputElement.querySelector(".conta_aba").textContent = message;
}
function mudarSenha (inputElement, senha){
    num = senha.length;
    message = ""
    for(i =0; i<num; i++){
        message += "*"
    }
    inputElement.querySelector(".senha_aba").textContent = message;
}
function marcarUsado(inputElement){
    inputElement.classList.remove("disponivel");
    inputElement.classList.add("usado");
}
function mudarHref(inputElement){
    inputElement.firstElementChild.href = "#aba_usado";
}
function limparCampos(){
    document.querySelector("#novaLocal").value = "";
    document.querySelector("#novaConta").value = "";
    document.querySelector("#novaSenha").value = "";
}
function fecharJanela(){
    document.querySelector(".close").click();
}
function apagarSave (inputElement){
    inputElement.classList.remove("usado");
    inputElement.classList.add("disponivel");
}

/* Cards */
document.addEventListener("DOMContentLoaded", () => {
    
    /* Card 1 */
    document.querySelector("#submit1").addEventListener("click", () => {
        var local = document.querySelector("#novaLocal1").value;
        var conta = document.querySelector("#novaConta1").value;
        var senha = document.querySelector("#novaSenha1").value;
        var inputElement = document.querySelector("#card1")
        var element = document.querySelector("#aba_usado1")
        mudarLocal(inputElement, local);
        mudarConta(element, conta);
        mudarSenha(element, senha);
        marcarUsado(inputElement);
        inputElement.firstElementChild.href = "#aba_usado1";
        fecharJanela()
    })
    document.querySelector("#aba_usado1 > div > div > div > button").addEventListener("click", () => {
        inputElement = document.querySelector("#aba_usado1");
        var senha = document.querySelector("#novaSenha1").value;
        if (inputElement.querySelector(".senha_aba").textContent != senha){
            inputElement.querySelector(".senha_aba").textContent = senha
        }
        else{
            num = senha.length;
            message = "";
            for(i =0; i<num; i++){message += "*"}
            inputElement.querySelector(".senha_aba").textContent = message;
        }
    })
    document.querySelector("#reset1").addEventListener("click", () => {
        var inputElement = document.querySelector("#card1");
        apagarSave(inputElement);
        inputElement.querySelector("#local").textContent = "Disponivel";
        inputElement.firstElementChild.href = "#popup1";
        document.querySelector("#novaLocal1").value = "";
        document.querySelector("#novaConta1").value = "";
        document.querySelector("#novaSenha1").value = "";
        fecharJanela();
    })


    /* Card 2 */
    document.querySelector("#submit2").addEventListener("click", () => {
        var local = document.querySelector("#novaLocal2").value;
        var conta = document.querySelector("#novaConta2").value;
        var senha = document.querySelector("#novaSenha2").value;
        var inputElement = document.querySelector("#card2");
        var element = document.querySelector("#aba_usado2");
        mudarLocal(inputElement, local);
        mudarConta(element, conta);
        mudarSenha(element, senha);
        marcarUsado(inputElement);
        inputElement.firstElementChild.href = "#aba_usado2";
        
        fecharJanela()
    })
    document.querySelector("#aba_usado2 > div > div > div > form > button").addEventListener("click", () => {
        inputElement = document.querySelector("#aba_usado2");
        var senha = document.querySelector("#novaSenha2").value;
        if (inputElement.querySelector(".senha_aba").textContent != senha){
            inputElement.querySelector(".senha_aba").textContent = senha;
        }
        else{
            num = senha.length;
            message = "";
            for(i =0; i<num; i++){message += "*"}
            inputElement.querySelector(".senha_aba").textContent = message;
        }
    })
    document.querySelector("#reset2").addEventListener("click", () => {
        var inputElement = document.querySelector("#card2");
        apagarSave(inputElement);
        inputElement.querySelector("#local").textContent = "Disponivel";
        inputElement.firstElementChild.href = "#popup2";
        document.querySelector("#novaLocal2").value = "";
        document.querySelector("#novaConta2").value = "";
        document.querySelector("#novaSenha2").value = "";
        fecharJanela();
    })

    /* Card 3 */
    document.querySelector("#submit3").addEventListener("click", () => {
        var local = document.querySelector("#novaLocal3").value;
        var conta = document.querySelector("#novaConta3").value;
        var senha = document.querySelector("#novaSenha3").value;
        var inputElement = document.querySelector("#card3");
        var element = document.querySelector("#aba_usado3");
        mudarLocal(inputElement, local);
        mudarConta(element, conta);
        mudarSenha(element, senha);
        marcarUsado(inputElement);
        inputElement.firstElementChild.href = "#aba_usado3";
        
        fecharJanela()
    })
    document.querySelector("#aba_usado3 > div > div > div > form > button").addEventListener("click", () => {
        inputElement = document.querySelector("#aba_usado3");
        var senha = document.querySelector("#novaSenha3").value;
        if (inputElement.querySelector(".senha_aba").textContent != senha){
            inputElement.querySelector(".senha_aba").textContent = senha;
        }
        else{
            num = senha.length;
            message = "";
            for(i =0; i<num; i++){message += "*"}
            inputElement.querySelector(".senha_aba").textContent = message;
        }
    })
    document.querySelector("#reset3").addEventListener("click", () => {
        var inputElement = document.querySelector("#card3");
        apagarSave(inputElement);
        inputElement.querySelector("#local").textContent = "Disponivel";
        inputElement.firstElementChild.href = "#popup3";
        document.querySelector("#novaLocal3").value = "";
        document.querySelector("#novaConta3").value = "";
        document.querySelector("#novaSenha3").value = "";
        fecharJanela();
    })

    /* Card 4 */
    document.querySelector("#submit4").addEventListener("click", () => {
        var local = document.querySelector("#novaLocal4").value;
        var conta = document.querySelector("#novaConta4").value;
        var senha = document.querySelector("#novaSenha4").value;
        var inputElement = document.querySelector("#card4");
        var element = document.querySelector("#aba_usado4");
        mudarLocal(inputElement, local);
        mudarConta(element, conta);
        mudarSenha(element, senha);
        marcarUsado(inputElement);
        inputElement.firstElementChild.href = "#aba_usado4";
        fecharJanela();
    })
    document.querySelector("#aba_usado4 > div > div > div > form > button").addEventListener("click", () => {
        inputElement = document.querySelector("#aba_usado4");
        var senha = document.querySelector("#novaSenha4").value;
        if (inputElement.querySelector(".senha_aba").textContent != senha){
            inputElement.querySelector(".senha_aba").textContent = senha;
        }
        else{
            num = senha.length;
            message = "";
            for(i =0; i<num; i++){message += "*"};
            inputElement.querySelector(".senha_aba").textContent = message;
        }
    })
    document.querySelector("#reset4").addEventListener("click", () => {
        var inputElement = document.querySelector("#card4");
        apagarSave(inputElement);
        inputElement.querySelector("#local").textContent = "Disponivel";
        inputElement.firstElementChild.href = "#popup4";
        document.querySelector("#novaLocal4").value = "";
        document.querySelector("#novaConta4").value = "";
        document.querySelector("#novaSenha4").value = "";
        fecharJanela();
    })

    /* Card 5 */
    document.querySelector("#submit5").addEventListener("click", () => {
        var local = document.querySelector("#novaLocal5").value;
        var conta = document.querySelector("#novaConta5").value;
        var senha = document.querySelector("#novaSenha5").value;
        var inputElement = document.querySelector("#card5");
        var element = document.querySelector("#aba_usado5");
        mudarLocal(inputElement, local);
        mudarConta(element, conta);
        mudarSenha(element, senha);
        marcarUsado(inputElement);
        inputElement.firstElementChild.href = "#aba_usado5";
        
        fecharJanela()
    })
    document.querySelector("#aba_usado5 > div > div > div > form > button").addEventListener("click", () => {
        inputElement = document.querySelector("#aba_usado5");
        var senha = document.querySelector("#novaSenha5").value;
        if (inputElement.querySelector(".senha_aba").textContent != senha){
            inputElement.querySelector(".senha_aba").textContent = senha;
        }
        else{
            num = senha.length;
            message = "";
            for(i =0; i<num; i++){message += "*"};
            inputElement.querySelector(".senha_aba").textContent = message;
        }
    })
    document.querySelector("#reset5").addEventListener("click", () => {
        var inputElement = document.querySelector("#card5");
        apagarSave(inputElement);
        inputElement.querySelector("#local").textContent = "Disponivel";
        inputElement.firstElementChild.href = "#popup5";
        document.querySelector("#novaLocal5").value = "";
        document.querySelector("#novaConta5").value = "";
        document.querySelector("#novaSenha5").value = "";
        fecharJanela();
    })

    /* Card 6 */
    document.querySelector("#submit6").addEventListener("click", () => {
        var local = document.querySelector("#novaLocal6").value;
        var conta = document.querySelector("#novaConta6").value;
        var senha = document.querySelector("#novaSenha6").value;
        var inputElement = document.querySelector("#card6");
        var element = document.querySelector("#aba_usado6");
        mudarLocal(inputElement, local);
        mudarConta(element, conta);
        mudarSenha(element, senha);
        marcarUsado(inputElement);
        inputElement.firstElementChild.href = "#aba_usado6";
        
        fecharJanela()
    })
    document.querySelector("#aba_usado6 > div > div > div > form > button").addEventListener("click", () => {
        inputElement = document.querySelector("#aba_usado6");
        var senha = document.querySelector("#novaSenha6").value;
        if (inputElement.querySelector(".senha_aba").textContent != senha){
            inputElement.querySelector(".senha_aba").textContent = senha;
        }
        else{
            num = senha.length;
            message = "";
            for(i =0; i<num; i++){message += "*"}
            inputElement.querySelector(".senha_aba").textContent = message;
        }
    })
    document.querySelector("#reset6").addEventListener("click", () => {
        var inputElement = document.querySelector("#card6");
        apagarSave(inputElement);
        inputElement.querySelector("#local").textContent = "Disponivel";
        inputElement.firstElementChild.href = "#popup6";
        document.querySelector("#novaLocal6").value = "";
        document.querySelector("#novaConta6").value = "";
        document.querySelector("#novaSenha6").value = "";
        fecharJanela();
    })
})
    


