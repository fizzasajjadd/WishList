import React,{useState} from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import './App.css';
import WishList from "./components/WishList";
import { ListGroup } from 'react-bootstrap';

function App() {
  
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);
  const [newPriority, setNewPriority] = useState('low');

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updatePriority = (index, priority) => {
    setItems(
      items.map((item, i) => (i === index ? { ...item, priority } : item))
    );
  };

  const moveToTop = (index) => {
    if (index > 0) {
      const item = items[index];
      setItems([item, ...items.slice(0, index), ...items.slice(index + 1)]);
    }
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>

        <div>
          <Form 
          input = {input} 
          setInput = {setInput}
          items = {items}
          setItems = {setItems}
          newPriority={newPriority}
          setNewPriority={setNewPriority}
          />
        </div>
        <ListGroup className="mt-4">
        {items.map((item, index) => (
          <WishList
            key={index}
            item={item}
            index={index}
            removeItem={removeItem}
            updatePriority={updatePriority}
            moveToTop={moveToTop}
          />
        ))}
      </ListGroup>

        <div>
        

        </div>

      </div>
      
    </div>
  );
}

export default App;
