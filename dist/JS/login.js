const user = {
    username: 'admin',
    password: 'admin123'
}

const userNameElm = document.getElementById('username')
const psNameElm = document.getElementById('password')
const btn = document.getElementById('btn_submit')

btn.addEventListener('click', function  (){
    if(userNameElm.value.length > 0 && psNameElm.value.length > 0){
        if(userNameElm.value == user.username && psNameElm.value == user.password){
            this.onclick; {
                location.href = "./../src/main.html"
            }
        }else{
            alert('username dan password salah')
        }
    }
    else{
        alert('login dulu')
    }
})

