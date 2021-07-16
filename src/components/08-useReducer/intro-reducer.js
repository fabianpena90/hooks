const initialState = [
  {
    id: 1,
    todo: "comprar camara",
    done: false,
  },
];

export const todoReduce = (state = initialState, action) => {
  if (action?.type === "ADD_TODO") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReduce();

const newTodo = {
  id: 2,
  todo: "comprar carro",
  done: false,
};

const action = {
  type: "ADD_TODO",
  payload: newTodo,
};

todos = todoReduce(todos, action);

console.log(todos);
