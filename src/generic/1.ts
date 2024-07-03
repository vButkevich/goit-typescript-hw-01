import axios from "axios";

async function fetchData<T>(url: string): Promice<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

console.log("generic:1.ts :>>---------------------------------------- ");
