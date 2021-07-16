const mail = document.getElementById("email")

function gravar(){
    const email = document.getElementById("email").value
    if (email === null || email ==='') return
    var increment = localStorage.length+1
    localStorage.setItem(increment,email)
    mail.value = null
}