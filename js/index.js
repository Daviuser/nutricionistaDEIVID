//Eventos
const caixaInput = document.querySelectorAll(".caixa_input");
caixaInput.forEach((element, i)=>{
    caixaInput[i].addEventListener('focus', ()=>{
        caixaInput[i].style.border='2px solid #06ca06';
    })
    caixaInput[i].addEventListener('focusout', ()=>{
        caixaInput[i].style.border='2px solid transparent';
    })
})

function limpar(nome, email, telefone){
    nome.style.border="2px solid transparent";
    email.style.border="2px solid transparent";
    telefone.style.border="2px solid transparent";
}

function verificar(){
    let txtNome = document.getElementById("txt-nome");
    let txtEmail = document.getElementById("txt-email");
    let txtTelefone = document.getElementById("txt-telefone");
    let txtMensagem = document.getElementById("txt-mensagem");

    let resInput = document.querySelectorAll(".res_input");

    limpar(txtNome, txtEmail, txtTelefone);

    if(txtNome.value.length == 0 ){
        resInput[0].innerHTML=`Preencha corretamente o campo nome`; 
        txtNome.focus();
        txtNome.style.border="2px solid red";
        return false;
    }
    resInput[0].innerHTML=``; 

    if(txtEmail.value.indexOf("@") < 0 ){
        resInput[1].innerHTML=`Preencha corretamente o campo email`; 
        txtEmail.value="";
        txtEmail.focus();
        txtEmail.style.border="2px solid red";
        return false;
    }
    resInput[1].innerHTML=``;

    if( isNaN(txtTelefone.value) || txtTelefone.value.length == 0 ){
        resInput[2].innerHTML=`Preencha corretamente o campo telefone`; 
        txtTelefone.value="";
        txtTelefone.focus();
        txtTelefone.style.border="2px solid red";
        return false;
    }
    resInput[2].innerHTML=``;

    txtNome = txtNome.value;
    txtEmail = txtEmail.value;
    txtTelefone = txtTelefone.value;
    txtMensagem = txtMensagem.value;

    document.form1.submit();
}

// Menu Mobile
function openMenu(){
    var nav_mobile = document.getElementById("nav-mobile");
    nav_mobile.style.right = "0";
}
function closeMenu(){
    var nav_mobile = document.getElementById("nav-mobile");
    nav_mobile.style.right = "-200px";
}

// Header
let logo = document.querySelector(".logo_site");
logo.src="assets/images/logo_edna_gonzales.svg";

// Footer
let icon = document.querySelectorAll(".icon-social");
icon[0].src="assets/icons/logo_facebook.png";
icon[1].src="assets/icons/logo_instagram.png";
icon[2].src="assets/icons/logo_linkidin.png";
icon[3].src="assets/icons/logo_tiktok.png";