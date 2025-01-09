const API_BASE_URL = 'http://65.2.180.17:8080'; // Replace with your API's base URL

// Fetch all ToDos
export async function fetchTodos() {
    try {
      const response = await fetch(`${API_BASE_URL}/todos`);
      if (!response.ok) throw new Error('Failed to fetch todos');
      return await response.json(); // Return the list of todos
    } catch (error) {
      console.error('Error fetching todos:', error);
      return []; // Return an empty list in case of an error
    }
  }