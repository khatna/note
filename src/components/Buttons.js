import React from 'react';
import Button from '@material-ui/core/Button';

// Buttons component: render the buttons representing separate notes
export default function Buttons(props) {
  const state = props.state;
  const buttons = state.notes.map((note, i) => {
    let preview = note.substring(0, 10) || `Note ${i+1}`;
    let variant = state.focus === i ? 'outlined' : 'text';
    return (
      <li key={i} style={{ listStyleType: "none" }}>
        <Button onClick={() => props.onClick(i)}  color='primary' variant={variant}>
          {preview}
        </Button>
      </li>
    )  
  });

  return (
    <div>
      <div className="control">
        <Button onClick={props.addNote} variant='contained' color='primary'>
          Add note
        </Button>
        <Button onClick={props.deleteNote} variant='contained' color='secondary'>
          Delete current note
        </Button>
      </div>
      <ul>{buttons}</ul>
    </div>
  );
}