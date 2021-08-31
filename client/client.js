document.querySelector('form').addEventListener('submit',(event)=>{
    event.preventDefault()
    let newDoc = document.createElement('div')
    let input = document.getElementById('in').value;
    document.getElementById('in').innerText = '';


    newDoc.innerHTML = `<p>${input}</p>`
    document.querySelector('body').appendChild(newDoc);
})

