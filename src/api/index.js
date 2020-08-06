export const fetchTodoList = async () => {
  const response = await fetch("http://localhost:8080");

  return response.json();
};
