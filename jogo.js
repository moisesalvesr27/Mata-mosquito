var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search //daumaolhada
nivel = nivel.replace('?', '')

if (nivel ==='normal'){
	criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
	criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
	criaMosquitoTempo = 750
}


function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight//daumaolhada
	largura = window.innerWidth//daumaolhada
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){

	tempo -= 1

	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'//daumaolhada
	} else {
		document.getElementById('cronometro').innerHTML = tempo//daumaolhada
	}
}, 1000)


function posicaoRandomica() {

	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()
		if (vidas > 3) {
			window.location.href = 'fim_de_jogo.html'//daumaolhada
		} else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
		
			vidas++	
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX//daumaolhada
	posicaoY = posicaoY < 0 ? 0 : posicaoY//daumaolhada


	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhaAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id ='mosquito'
	mosquito.onclick = function() {
		this.remove()
	}


	document.body.appendChild(mosquito)//daumaolhada

	console.log()
}

function tamanhaAleatorio(){
	var classe = Math.floor(Math.random() * 3) 


	switch (classe){
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}
}

function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2) 

	switch (classe){
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
		
	}
}