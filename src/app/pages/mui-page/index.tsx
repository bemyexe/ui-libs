import { useState } from 'react';
import { Button, Card, Container, List, TextField } from '@mui/material';

import { Page } from '../../components/page';

interface Todo {
  id: number;
  title: string;
}

export const MuiPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState('');
  const handleCreateTodo = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), title: todo };
    setTodos([...todos, newTodo]);
    setTodo('');
  };
  const handleDeleteTodo = (todo: Todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  return (
    <Page withHeader className="flex justify-center">
      <Container maxWidth="sm" className="p-5">
        <form
          className="flex justify-between border-4 border-primary rounded-lg p-5 mb-2"
          onSubmit={handleCreateTodo}
        >
          <TextField
            required
            label="Create todo"
            variant="outlined"
            placeholder="Something..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button variant="contained" type="submit">
            Create
          </Button>
        </form>
        <List className="flex flex-col gap-3">
          {todos.map((todo, index) => (
            <Card
              key={todo.id}
              className="flex items-center justify-between p-2"
            >
              {index + 1}. {todo.title}
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleDeleteTodo(todo)}
              >
                Delete
              </Button>
            </Card>
          ))}
        </List>
      </Container>
    </Page>
  );
};
