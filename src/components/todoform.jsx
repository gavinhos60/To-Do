import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    localStorage.setItem(value, category);
    addTodo(value, category);

    setValue("");
    setCategory("");

    console.log(value, category);
  };

  return (
    <div>
      <h2>Criar Tarefa:</h2>
      <form>
        <input
          type="text"
          value={value}
          placeholder="Digite o titulo"
          id="titulo"
          onChange={(e) => setValue(e.target.value)}
        />
        <select
          value={category}
          id="categoria"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione uma Categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit" onClick={handleSubmit}>
          Criar Tarefa
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
