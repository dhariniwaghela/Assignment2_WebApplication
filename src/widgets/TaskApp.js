import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-5 mb-4">Task Manager</h1>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              value={newTask}
              onChange={handleChange}
              placeholder="Enter a new task"
            />
          </Form.Group>
          <Button variant="primary" onClick={addTask}>
            Add Task
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup className="mt-4">
            {tasks.map((task) => (
              <ListGroup.Item key={task.id}>
                <Form.Check
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  label={task.text}
                />
                <Button
                  variant="danger"
                  className="float-end"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default TaskApp;
