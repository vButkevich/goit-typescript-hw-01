import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    console.log("response :>> ", response);
    console.log("response.data :>> ", response.data);
    console.log("response.type :>> ", typeof response);
    console.log("response.type :>> ", typeof response.data);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

console.log("generic:1.ts :>>---------------------------------------- ");
type Todo = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
};

const data = fetchData<Todo>("https://jsonplaceholder.typicode.com/todos");
console.log("fetchData :>> ", data);
