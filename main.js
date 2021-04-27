const addBtn = document.getElementsByClassName('add-btn');
const todo   = document.getElementById('todo');


    addBtn[0].addEventListener('click', function() {

        let addArea = document.getElementById('add-area').value;//テキストエリアの値取得

        const toDoL = document.createElement('li');//liの追加
        toDoL.innerHTML = addArea;
        todo.appendChild(toDoL);

        const toDoB = document.createElement('button');//buttonの追加
        toDoB.className = 'trash';
        toDoB.innerHTML = '完了';
        toDoL.appendChild(toDoB);

        toDoB.addEventListener('click', function() {//  完了が押されたら
            const list = document.getElementsByClassName('trash');
            todo.removeChild(toDoL)
        });
    });
