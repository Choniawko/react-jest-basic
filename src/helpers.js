export const addTodo = (list, todo) => [...list, todo];
export const findById = (list, id) => list.find(el => el.id === id);
export const toggleTodo = todo => ({ ...todo, isComplete: !todo.isComplete });
export const updateTodo = (list, updated) => {
  const updatedIndex = list.findIndex(item => item.id === updated.id);
  return [
    ...list.slice(0, updatedIndex),
    updated,
    ...list.slice(updatedIndex + 1)
  ];
};
