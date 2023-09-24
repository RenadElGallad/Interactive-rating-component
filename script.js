var circles = document.getElementsByClassName('num')

for(var i = 0; i< circles.length ; i++){
    circles[i].onclick = BtnClicked
}

function BtnClicked(e){
    e.stopPropagation()
    Reset()
    e.target.style.backgroundColor = 'hsl(25, 97%, 53%)'
    e.target.style.color = 'white'

    var inner = e.target.innerText
    document.getElementById('SelectedNum').innerText = inner
}

function Reset(e) {

    for(var i = 0; i< circles.length ; i++){
        circles[i].style.backgroundColor = '#273039'
        circles[i].style.color = 'hsl(216, 12%, 54%)'
    }
}

document.onclick = Reset


var submitBtn = document.getElementById('Btn')

function ThankYou(x){

    document.getElementById('RatingSlide').style.display = 'none'
    document.getElementById('ThankYouSlide').style.display = 'inline'
    
}

submitBtn.onclick = ThankYou