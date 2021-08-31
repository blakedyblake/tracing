document.querySelector('form').addEventListener('submit',(event)=>{
    event.preventDefault()
    let newDoc = document.createElement('div')
    let input = document.getElementById('in').innerText;
    document.getElementById('in').innerText = '';


    newDoc.innerHTML = `<p>${input}</p>`
    document.querySelector('body').append(newDoc);
})

