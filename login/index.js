const btn = document.querySelector('.btn')
console.log('test')
btn.addEventListener('click', (e)=>{
    e.preventDefault()
    const username = document.getElementById('username').value;
    const password = document.getElementById('pw').value;
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: username,
          password: password,
          expiresInMins: 30, // optional, defaults to 60
        }),
        
    })
      .then(res => {
        if(res.status == 200){
          alert('Login Berhasil!');
        }
        return res.json();
      })
      .then(data => {
        document.cookie = `accessToken = ${data.accesToken}; expires=${24 * 60 * 60 * 1000} ; path=/`;
        document.cookie = `efreshToken = ${data.refreshToken}; expires=${24 * 60 * 60 * 1000} ; path=/`;
      });
})