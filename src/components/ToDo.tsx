import { IToDo } from '../atom';

function ToDo(toDo: IToDo) {
  return (
    <li key={toDo.id}>
      <span>{toDo.text}</span>
    </li>
  );
}

export default ToDo;
