/* RENDERIZAÇÃO DA LISTA DE DADOS */
const listBook = document.querySelector('#book-list');

function renderList(doc){

    let li = document.createElement('li')
    let autor = document.createElement('span')
    let titulo = document.createElement('span')

    autor.textContent = doc.autor
    titulo.textContent = doc.titulo

    li.appendChild(titulo);
    li.appendChild(autor);

    listBook.appendChild(li);

}

/* LISTA OS DADOS DA COLEÇÃO DO FIRESTORE */
db.collection('libri-collection')
    .get()
    .then((snapshot)=>{
        // console.log(snapshot)
        snapshot.docs.forEach(
            doc => {
                console.log(doc.data())
                renderList(doc.data())
            }
        )
    });

    /* INSERÇÃO DE DADOS */
    const form = document.querySelector('#add-book-form')

    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        alert('Formulário funcionando!')
    });