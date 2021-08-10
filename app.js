window.addEventListener('DOMContentLoaded', ()=>{
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const year = document.querySelector('#year');
    const button = document.querySelector('.btn');
    const bookList = document.querySelector('#book-list');

    button.addEventListener('click', (event)=>{
        event.preventDefault()
        if(title.value === "" && author.value === "" && year.value === ""){
            alert('Iltimos malumotlarni kiriting !')
        }else{
            const newRow = document.createElement('tr')

            // create new table

            const newTitle = document.createElement('th')
            newTitle.innerHTML = title.value
            newRow.appendChild(newTitle)

            // create new author
            const newAuthor = document.createElement('th')
            newAuthor.innerHTML = author.value
            newRow.appendChild(newAuthor)

            // create new year 
            const dataYear = document.createElement('th')
            dataYear.innerHTML = year.value
            newRow.appendChild(dataYear)

            // Display in UI

            bookList.appendChild(newRow)

            setTimeout( ()=>{
                title.value = ""
                author.value = ""
                year.value = ""

            },500 )

        }
    })

    // BASIC


})