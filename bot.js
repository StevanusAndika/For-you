<!DOCTYPE html>
<html lang="in">
<head>
				<meta charset="UTF-8">
				<title>membuat Fake bot dengan javascript</title>
				<style>

				    *{
				        box-sizing:border-box;
				    }
				    button{
				    
				    background-color:black;
				    color:white;
				    border-radius:4px;
				    
				    }
	button:hover{
	cursor:pointer;
	

	}
	    
	    
	}
</style>
</head>
<body>
			  <div class="container">
      <div class="wrapper">
        <div class="kotak">
            
          <p id="pertanyaan"></p>
          <div class="row">
            <input id="jawaban" type="text" placeholder="silahkan jawab" />
            
            <button onclick="botStart()">SEND</button>
          </div>
        </div>
        
      </div>
    </div>
    <script>
        
const pertanyaan = document.getElementById("pertanyaan") 
const jawaban =document.getElementById("jawaban")

let init = 0
const botSay = (data) => {
  return [
    "Perkenalkan nama saya Mr.bot,siapa nama kamu?",
    `Halo ${data?.nama},berapa umur mu?`,
    `Ohhh ${data?.usia}, hobi kamu apa ya?`,
    `wawww sama dong,aku juga hobi ${data?.hobi}, aku mau nanya kamu punya pacar gak?`,
    `ohhh ${data?.pacar}, ya udah kalau gitu. kita udahan yah?`,
  ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []
function botStart(){
  init ++ 
   if (init === 1) {
    botDelay({ nama: jawaban.value })
  } else if (init === 2) {
    botDelay({ usia: jawaban.value })
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value })
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value })
  } else if (init === 5) {
    finishing()
  } else {
    botEnd()
  }
}

function botDelay(jawabanUser){
  pertanyaan.innerHTML = botSay(jawabanUser)[init]

}
function finishing (){
  pertanyaan.innerHTML="Makasih dah ngobrol sama aku,stay healthy ya"
}

function botEnd(){
  window.location.reload();
}

    </script>
</body>
</html>
