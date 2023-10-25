function Switch(){
    //  document.getElementById("output").backgroundColor
    console.log('Entered in switch')
    // console.log(precolor)
    if (document.getElementById("output").style.backgroundColor == "rgb(13, 21, 10)") {
        console.log('Enter in 1st condition')
        document.getElementById("output").innerText = ''
        document.getElementById("output").style.backgroundColor = ""
    }
    else if (document.getElementById("output").style.backgroundColor == "") {
        console.log('Enter in condition')
        document.getElementById("output").innerText = ''
        document.getElementById("output").style.backgroundColor = "rgb(13, 21, 10)"
    } 
}
function Numeric(word){
    document.getElementById("output").innerText = document.getElementById('output').innerText + word
}
function Delete(){
    document.getElementById("output").innerText = ''
}
function Clr(){
    document.getElementById('output').innerText = document.getElementById('output').innerText.slice(0,-1)
}
function Enter(){
    if(document.getElementById('output').innerText[0] == '=' ){
        let length = document.getElementById('output').innerText.length
        var text = document.getElementById('output').innerText.slice(2,length)
    }
    else{
        var text = document.getElementById('output').innerText
    }
    document.getElementById('output').innerText = '= '+eval(text)
}
