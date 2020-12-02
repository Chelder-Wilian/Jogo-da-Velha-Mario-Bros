var imagem = document.getElementsByTagName('img');
var botoes = document.getElementsByTagName('input');
var fiel = document.getElementsByTagName('fieldset');
var tabuleiro = document.getElementById('tabuleiro');
var inicio = document.getElementById('inicio');
var div = document.getElementsByTagName('div');
var est1 = document.getElementById('est1');
var verificar = 0;

var widthTela = window.screen.availWidth;
var heightTela = window.screen.availHeight;

function load(){
	botoes[11].style.background='red';
	botoes[17].style.background='red';
	botoes[9].style.background='red';
	if (widthTela < 420 || heightTela < 420) {
		document.getElementById('tabuleiro').classList.add('tabuleiroMobile');
		document.getElementById('inicio').classList.add('inicioMobile');
		document.getElementById('vs1').classList.add('botaoMobile');
		document.getElementById('vscpu').classList.add('botaoMobile');
		document.getElementById('result').classList.add('resultMobile');
		document.getElementById('restarte').classList.add('botaoMobile');
		document.getElementById('continue').classList.add('botaoMobile');
		for (var i = 0; i <= 12; i++) {
			//alert(document.getElementById(i));
			document.getElementsByClassName('select')[i].classList.add('selectMobile');
			document.getElementsByTagName('img')[i].style.marginTop='-400px';
			document.getElementById(i).classList.add('quadrosMobile');
		}
		
	}
}

function multi() {	
	for (var y = 16; y < 21; y++) {
		botoes[y].style.background='';
	}
	for (var x = 5; x < 11; x++) {
		imagem[x].style.opacity=0;	
	}
	verificar = 0;
	botoes[10].style.background='';
	botoes[9].style.background='red';
	botoes[17].style.background='red';
	imagem[7].style.opacity=1;
	fiel[1].style.display='block';
}

function solo() {
	for (var i = 16; i < 21; i++) {
		botoes[i].style.background='';
		imagem[i-10].style.opacity=0;	
	}
	verificar = 1;
	botoes[9].style.background='';
	botoes[10].style.background='red';
	imagem[5].style.opacity=1;
	fiel[1].style.display='none';
}

function selecionar(esse) {
	for (var i = 11; i < 16; i++) {
		botoes[i].style.background='';
		imagem[i-11].style.opacity=0;
	}
	esse.style.background='red';
	if (esse.value == 'MARIO') {
		imagem[0].style.opacity=1;
	}
	if (esse.value == 'LUIGI') {
		imagem[1].style.opacity=1;
	}
	if (esse.value == 'PEACH') {
		imagem[2].style.opacity=1;
	}
	if (esse.value == 'YOSHI') {
		imagem[3].style.opacity=1;
	}
	if (esse.value == 'TOAD') {
		imagem[4].style.opacity=1;
	}
}

function selecionar2(esse) {
	for (var i = 16; i < 21; i++) {
		botoes[i].style.background='';
		imagem[i-10].style.opacity=0;
	}
	esse.style.background='red';
	if (esse.value == 'MARIO') {
		imagem[6].style.opacity=1;
	}
	if (esse.value == 'LUIGI') {
		imagem[7].style.opacity=1;
	}
	if (esse.value == 'PEACH') {
		imagem[8].style.opacity=1;
	}
	if (esse.value == 'YOSHI') {
		imagem[9].style.opacity=1;
	}
	if (esse.value == 'TOAD') {
		imagem[10].style.opacity=1;
	}
}

function start() {
	imagem[11].style.opacity=1;
	document.getElementById('inicio').style.display = 'none';

	var tipo = document.createElement("script");
	if (verificar == 0) {
		tipo.src="js/jvplayers.js";
	}
	else{
		tipo.src="js/jvsolo.js";
	}
	document.body.appendChild(tipo);
}

function ajuda(){
	alert(`Regras do Jogo da Velha\nO tabuleiro  é uma matriz  de três linhas por três colunas.\n
		Dois jogadores escolhem uma marcação cada um, geralmente um círculo (O) e um xis (X).\n
		Os jogadores jogam alternadamente, uma marcação por vez, numa lacuna que esteja vazia.\n
		O objectivo é conseguir três círculos ou três xis em linha, quer horizontal, vertical ou diagonal , e ao mesmo tempo, quando possível, impedir o adversário de ganhar na próxima jogada.\n
		Quando um jogador conquista o objetivo, costuma-se riscar os três símbolos.\n
		Se os dois jogadores jogarem sempre da melhor forma, o jogo terminará sempre em empate.\n
		A lógica do jogo é muito simples, de modo que não é difícil deduzir ou decorar todas as possibilidades para efetuar a melhor jogada – apesar de o número total de possibilidades ser muito grande, a maioria delas é simétrica, além de que as regras  são simples.\n
		Por esse motivo, é muito comum que o jogo empate (ou “dê velha”).\n
		Ganhar: Se você tem duas peças numa linha, ponha a terceira.\n
		Bloquear: Se o oponente tiver duas peças em linha, ponha a terceira para bloqueá-lo.\n
		Triângulo: Crie uma oportunidade em que você poderá ganhar de duas maneiras.\n
		Bloquear o Triângulo do oponente\n
		Centro: Jogue no centro.\n
		Canto vazio: jogue num canto vazio.`)
}
