document.querySelector('form').addEventListener('submit',()=>{
    let newDoc = document.createElement('div')
    let input = document.getElementById('in').innerText;
    newDoc.innerHTML = `<p>${input}</p>`
})

