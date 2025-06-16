console.log('mainjs loaded')

const update = document.querySelector('#updateButton')
update.addEventListener('click', updateButton)

const del = document.querySelector('#deleteLazy')
del.addEventListener('click',deleteLazy)


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
    })
    console.log('pushed!')
}

function deleteLazy(){
    fetch('/quotes',{
        method: 'delete',
        headers : {'Content-Type':'application/json'}
    })
}