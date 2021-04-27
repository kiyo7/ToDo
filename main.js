    const remtask  = document.getElementById('remtask');
    const addBtn   = document.getElementsByClassName('add-btn');
    const todo     = document.getElementById('todo');

    let count = todo.childElementCount - 1;

    remtask.textContent = `タスクはありません`;
    
    addBtn[0].addEventListener('click', function() {
        const toDoL = document.createElement('li');
        const toDoB = document.createElement('button');

        let addArea = document.getElementById('add-area').value;//テキストエリアの値取得
        if (addArea === '') {
            alert ('テキストを入力してください')
        } else {
        //liの追加
        toDoL.innerHTML = addArea;
        todo.appendChild(toDoL);

        //buttonの追加
        toDoB.className = 'trash';
        toDoB.innerHTML = '完了';
        toDoL.appendChild(toDoB);

        document.getElementById('add-area').value = "";//値のリセット
        count += 1; 
        remtask.textContent = `残りのタスク${count}個`;
        }

        toDoB.addEventListener('click', function() {//  完了が押されたら
            todo.removeChild(toDoL)//liの削除
            count -= 1; 
            if (count === 0) {
                remtask.textContent = `タスクはありません`;
            } else {
                remtask.textContent = `残りのタスク${count}個`;
            }
        });
    });

    // const taskUl   = document.getElementById('taskul');
     // taskUl.append(toDoL);
