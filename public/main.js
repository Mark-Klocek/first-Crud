console.log('mainjs loaded')

const update = document.querySelector('#updateButton')
update.addEventListener('click', updateButton)

const del = document.querySelector('#deleteLazy')
del.addEventListener('click',deleteLazy)

const messageDiv = document.querySelector('#message')


function updateButton(){
    fetch('/quotes',{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: 'Not Lazy Mark',
            quote: 'You left this blank!'

        })
    })
    .then(res =>{
        if (res.ok) return res.json()
    })
    .then(response =>{
        console.log(response)
        window.location.reload(true)
    })
    console.log('pushed!')
}

function deleteLazy(){
    fetch('/quotes',{
        method: 'delete',
        headers : {'Content-Type':'application/json'},
        body: JSON.stringify({
            name: 'Not Lazy Mark'
        })
    })
    .then(res =>{
        if (res.ok) return res.json()
    })
    .then(response =>{
        if (response === 'No more lazy peons'){
            messageDiv.textContent = 'No more lazy peons!'
        }
        window.location.reload(true)
    })
}