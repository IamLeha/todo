const formSearch = document.querySelector('#formSearch');
const todoList = document.querySelector('#todoList');
const formAdd = document.querySelector('#formAdd');
const btnCont = document.querySelector('#btnContainer')


const addLi = val => {

    let newLi = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${val}</span>
        <i class="fa fa-trash btn-delete"></i>
    </li>
    `;

    if(val.length){
        todoList.innerHTML += newLi;
    }

    formAdd.reset();

};

const filterLi = val => {
    let List = document.querySelectorAll('.list-group-item');
    let listArray = Array.from(List);

    if((val.trim()).length ){
        listArray.forEach((elem, index) => {
            if(elem.classList.contains('hide')){
                elem.classList.remove('hide');
            }

            if(elem.innerText !== val){
                elem.classList.add('hide');
            }
        });
    }
    formSearch.reset();
};

const deleteLi = val => {
    if(val.classList.contains('btn-delete')){
        val.parentElement.remove();
    }
};

const highlihter = val => {
    if(val.classList.contains('list-group-item')){
        val.classList.add('highlihter');
    }
}

const remove = val => {
    if(val.classList.contains("highlihter")){
        val.classList.remove("highlihter");
    }
}

formAdd.addEventListener("submit", (e) => {
    e.preventDefault();

    let newtodo = e.target.addInput.value.trim();               //trim - удаляет пробелы

    addLi(newtodo);

});

todoList.addEventListener("click", (e) => {
    let rem = e.target;

    deleteLi(rem);
    highlihter(rem);
    highlihter(rem);

});

formSearch.addEventListener("submit", e => {
    e.preventDefault(); 
    let rem = e.target.searchInput.value;

    filterLi(rem);

});

todoList.addEventListener("dblclick", (e) => {
    let rem = e.target;

    remove(rem);

});

btnCont.addEventListener('click', (e) => {
    let rem = e.target;
    let List = document.querySelectorAll('.list-group-item');
    let listArray = Array.from(List);

    if(rem.classList.contains('btn-danger')){
        /*for(let i=0; i < listArray.length; i++){
            if(listArray[i].classList.contains("highlihter")){
                listArray[i].classList.remove("highlihter");
                listArray[i].remove();
            }
        }*/

        listArray.forEach((elem, index) => {
            if(elem.classList.contains('highlihter')){
                elem.classList.remove('highlihter');
                elem.remove();
            }
        });
    }

    if(rem.classList.contains('btn-primary')){
        location.href='https://www.youtube.com';
    }
    

    if(rem.classList.contains('btn-info')){
        listArray.forEach((elem, index) => {
            if(elem.classList.contains("list-group-item")){
                elem.classList.add('hide');
            }
        });
    }

    if(rem.classList.contains('btn-success')){
       for(let i=0; i< listArray.length; i++){
            if(listArray[i].classList.contains('hide')){
                listArray[i].classList.remove('hide');
            }
        }
    }

});
