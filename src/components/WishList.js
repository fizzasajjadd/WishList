import React from 'react'
import { ListGroup, Button, Form } from 'react-bootstrap';


function WishList({  item, index, removeItem, updatePriority, moveToTop }) {
 
    
    return (
        <ListGroup.Item>
            <div className="list-item">
            <div className='list'>
                    wish = {item.title} , priority= {item.priority}
                </div>
                <div>
                   <Form.Control
                        as="select"
                        value={item.priority}
                        onChange={(e) => updatePriority(index, e.target.value)}
                        className="task-priority"
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </Form.Control>
                    
                    <Button variant="info" onClick={() => moveToTop(index)} className="button-edit task-button">
                    <i class="fa fa-arrow-circle-up"></i>
                    </Button>
                    <Button variant="danger" onClick={() => removeItem(index)} className='button-delete task-button'>
                    <i class="fa fa-trash"></i>
                    </Button>
                </div>
            </div>
        </ListGroup.Item>

    )
}

export default WishList