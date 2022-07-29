import { useRecoilValue } from 'recoil';
import { toDoSelector, toDoState } from '../atom';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

function ToDoList() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  // const toDos = useRecoilValue(toDoState);
  // const selectorOutput = useRecoilValue(toDoSelector);
  // console.log(selectorOutput);

  return (
    <div>
      <h1>To Dos</h1>
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDo.map((toDo) => (
          <ToDo {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo {...toDo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default ToDoList;
