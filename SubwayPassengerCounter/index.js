let count = 0

function increment (){
    count += 1 
    document.getElementById("count-el").innerText = count
}

function save(){
    prev = count + " - "
    document.getElementById("save-el").textContent += prev
    count = 0
    document.getElementById("count-el").innerText = 0
}
