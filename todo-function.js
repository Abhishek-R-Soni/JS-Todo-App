function searchTodo() {
    document.querySelector('#search').addEventListener('change', function (e) {
        let todos = JSON.parse(localStorage.getItem('todos'))
        document.querySelector('#srh').innerHTML = ""

        todos.forEach(function (todo) {
            if (todo.title.toLowerCase().includes(e.target.value)) {
                const p = document.createElement('p')
                p.textContent = todo.title + ' ' + '( ' + todo.completed + ' )'
                document.querySelector('#srh').appendChild(p)
            }
        })
    })
}

function clearTodo() {
    document.querySelector('#remove').addEventListener('click', function () {
        document.querySelector('#srh').innerHTML = ""
    })
}

function displayTodos() {
    document.querySelector('#show').addEventListener('click', function () {
        let todos = JSON.parse(localStorage.getItem('todos'))
        document.querySelector('#srh').innerHTML = ""

        todos.forEach(function (todo) {
            let div = document.createElement('div')
            let sp = document.createElement('span')
            let btn = document.createElement('button')
            let cb = document.createElement('input')
            cb.setAttribute('type', 'checkbox')

            sp.textContent = todo.title + ' : ' + todo.completed
            btn.textContent = 'X'

            div.appendChild(cb)
            div.appendChild(sp)
            div.appendChild(btn)

            cb.addEventListener('input', () => {
                makeComplete(todo.id)
            })

            btn.addEventListener('click', () => {                
                removeTodo(todo.id)
            })
            document.querySelector('#srh').appendChild(div)
        })
    })
}

function removeTodo(fid) {
    let todos = JSON.parse(localStorage.getItem('todos'))

    let todo = todos.find(function (todo) {
        return fid === todo.id
    })

    todos.pop(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}

function makeComplete(fid) {
    let todos = JSON.parse(localStorage.getItem('todos'))

    let todo = todos.find(function (todo) {
        return fid === todo.id
    })

    if (!todo.completed) {
        todo.completed = true
    }

    localStorage.setItem('todos', JSON.stringify(todos))
}

function addTodo() {

    document.querySelector('#add').addEventListener('click', function (e) {
        let todo = JSON.parse(localStorage.getItem('todos'))
        todo.push({
            id: uuidv4(), 
            title: txt,
            completed: false
        })

        localStorage.setItem('todos', JSON.stringify(todo))

        todos = JSON.parse(localStorage.getItem('todos'))
        document.querySelector('#srh').innerHTML = ""

        todos.forEach(function (todo) {
            let p = document.createElement('p')
            p.textContent = todo.title + ' : ' + todo.completed
            document.querySelector('#srh').appendChild(p)
        })
    })
}