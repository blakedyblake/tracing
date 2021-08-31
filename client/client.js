document.querySelector('form').addEventListener('submit',(event)=>{
    event.preventDefault()
    let newDoc = document.createElement('div')
    let input = document.getElementById('in').value;
    document.getElementById('in').value = '';


    newDoc.innerHTML = `<div><p>${input}</p></div>`
    document.querySelector('body').appendChild(newDoc);
})

