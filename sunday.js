const addBtn = document.getElementById('add');
const sunday = JSON.parse(localStorage.getItem('sunday'))

if(sunday){
    sunday.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text =''){
    const note = document.createElement("div")
    note.classList.add('note')

    note.innerHTML = `
        <img src="./images/pin.png" alt="pin">
            <div class="tools">
                <button class="edit" class="add">
                    <i class="fa-solid fa-pencil"></i>      
                </button>
                <button class="delete" class="add">
                    <i class="fa-solid fa-eraser"></i>
                </button>
            </div>
            <div class="main ${text ? "hidden" : ''}"></div>
            <textarea class='${text ? '' : 'hidden'}'></textarea>
        `
        const deleteBtn = note.querySelector('.delete')

        deleteBtn.addEventListener('click', () => {
            note.remove()

            updateLS()
        })

        const editBtn = note.querySelector('.edit');
        const main = note.querySelector('.main');
        const textArea = note.querySelector('textarea');
        editBtn.addEventListener('click', () =>{
            main.classList.toggle('hidden')
            textArea.classList.toggle('hidden')
        })

        textArea.value = text
        main.innerHTML = marked(text)

        textArea.addEventListener('input', (e) =>{
            const{value} = e.target
            main.innerHTML = marked(value)

            updateLS()
        })



        document.body.appendChild(note)
    
    }

function updateLS(){
    const notesText = document.querySelectorAll('textarea')

    const sunday = []

    notesText.forEach((note) => sunday.push(note.value))
    localStorage.setItem('sunday', JSON.stringify(sunday))
}










