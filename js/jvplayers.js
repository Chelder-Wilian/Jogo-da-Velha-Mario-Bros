var quadros = document.getElementsByClassName('quadros');
var botoes = document.getElementsByTagName('input');
var div = document.getElementsByTagName('div');
var placar1 = document.getElementById('placar1');
var placar2 = document.getElementById('placar2');
var placares = document.getElementById('placares');
var texto = document.getElementById('texto');
var est1 = document.getElementById('est1');
var est2 = document.getElementById('est2');

var m = [];
//  [ 0  1  2 ]
//  [ 3  4  5 ]
//  [ 6  7  8 ]

var cont = 0;

function marcar(click) {
	if (click.value==' ') {
		if(cont%2==0){
			click.value = 'X';
			m[click.id]= 5;
		}
		if(cont%2==1){
			click.value = 'O';
			m[click.id] = 1;
		}
		cont++;
		return verificar();
	}
}

var deuVelha = '';

function verificar() {
	if (m[0]+m[1]+m[2] == 3 || m[0]+m[1]+m[2] == 15) {
		quadros[0].style.color='red';
		quadros[1].style.color='red';
		quadros[2].style.color='red';
		return resultado();
	}
	if (m[3]+m[4]+m[5] == 3 || m[3]+m[4]+m[5] == 15) {
		quadros[3].style.color='red';
		quadros[4].style.color='red';
		quadros[5].style.color='red';
		return resultado();
	}
	if (m[6]+m[7]+m[8] == 3 || m[6]+m[7]+m[8] == 15) {
		quadros[6].style.color='red';
		quadros[7].style.color='red';
		quadros[8].style.color='red';
		return resultado();
	}
	if (m[0]+m[3]+m[6] == 3 || m[0]+m[3]+m[6] == 15) {
		quadros[0].style.color='red';
		quadros[3].style.color='red';
		quadros[6].style.color='red';
		return resultado();
	}
	if (m[1]+m[4]+m[7] == 3 || m[1]+m[4]+m[7] == 15) {
		quadros[1].style.color='red';
		quadros[4].style.color='red';
		quadros[7].style.color='red';
		return resultado();
	}
	if (m[2]+m[5]+m[8] == 3 || m[2]+m[5]+m[8] == 15) {
		quadros[2].style.color='red';
		quadros[5].style.color='red';
		quadros[8].style.color='red';
		return resultado();
	}
	if (m[0]+m[4]+m[8] == 3 || m[0]+m[4]+m[8] == 15) {
		quadros[0].style.color='red';
		quadros[4].style.color='red';
		quadros[8].style.color='red';
		return resultado();
	}
	if (m[2]+m[4]+m[6] == 3 || m[2]+m[4]+m[6] == 15) {
		quadros[2].style.color='red';
		quadros[4].style.color='red';
		quadros[6].style.color='red';
		return resultado();
	}
	var total = 0;
	for(var i=0;i < m.length;i++) {
		total += parseFloat(m[i]);
		if (total == 25 || total == 29) {
			deuVelha = true;
			return resultado();
		}
	}

	if (cont%2==1) {
		est1.style.opacity=0;
		est2.style.opacity=1;
		return cpu();
	}
	if (cont%2==0) {
		est1.style.opacity=1;
		est2.style.opacity=0;
	}
}

var salvo1=0;
var salvo2=0;


function resultado() {
	var win = ''
	for (var i = 0; i < 9; i++) {
		botoes[i].disabled='true';
	}
	if (deuVelha == true) {
		win = `DEU <br> VELHA!`
	}
	else{
		if (cont%2==1) {
			win = `PARABÉNS!<br>JOGADOR 1 VENCEU!`;
			salvo1 ++;

		}
		if (cont%2==0) {
			win = `PARABÉNS!<br>JOGADOR 2 VENCEU!`;
			salvo2++;
		}
	}
	placar1.innerHTML=`${salvo1}`;
	placar2.innerHTML=`${salvo2}`;
	texto.innerHTML = `${win}`;
	setTimeout(function() {
		document.getElementById('result').style.display='block';
	}, 1500);
}


function continuar() {

	document.getElementById('tabuleiro').style.display='block';
	document.getElementById('result').style.display='none';

	for (var i = 0; i < 9; i++) {
		botoes[i].style.color='';
		botoes[i].value=' ';
		botoes[i].disabled=false;
		m=[];
	}

	if (cont%2==1) {
		est1.style.opacity=0;
		est2.style.opacity=1;
		return cpu();
	}
	if (cont%2==0) {
		est1.style.opacity=1;
		est2.style.opacity=0;
	}

	deuVelha = false;
}

function resetarJogo() {
	document.location.reload();
}

function mostrar(){
	alert(`JOGADOR 1 [${salvo1}]  << VS >> [${salvo2}] JOGADOR 2`)
}