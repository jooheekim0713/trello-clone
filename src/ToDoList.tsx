import React, { useState } from 'react';

function ToDoList() {
  const [toDo, setToDo] = useState('');
  const [toDoError, setToDoError] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDoError('');
    setToDo(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError('to do should be longer');
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write to do"
        />
        <button type="submit">Add</button>
        {toDoError !== '' ? toDoError : null}
      </form>
    </div>
  );
}
export default ToDoList;
