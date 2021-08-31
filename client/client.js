document.querySelector('form').addEventListener('submit',(event)=>{
    event.preventDefault()
    let newDoc = document.createElement('div')
    let input = document.getElementById('in').value;
    document.getElementById('in').value = '';

    newDoc.style.position = 'absolute';
    newDoc.style.top = `${15 + 20 *Math.floor(Math.random()*20)}%`
    newDoc.style.left = `${15 + 10 *Math.floor(Math.random()*20)}%`



    newDoc.innerHTML = `<p>${input}</p>`
    document.querySelector('body').appendChild(newDoc);
})

