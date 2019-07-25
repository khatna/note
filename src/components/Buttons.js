import React from 'react';
import Button from '@material-ui/core/Button';

// Buttons component: render the buttons representing separate notes
export default function Buttons(props) {
  const buttons = props.notes.map((note, i) => {
    let preview = note.substring(0, 10) || `Note ${i+1}`;
    return (
      <li key={i} style={{ listStyleType: "none" }}>
        <Button onClick={() => props.onClick(i)}  color='primary'>
          {preview}
        </Button>
      </li>
    )  
  });

  return (
    <div>
      <Button onClick={props.addNote} variant='contained' color='primary'>
        Add note
      </Button>
      <Button onClick={props.deleteNote} variant='contained' color='secondary'>
        Delete current note
      </Button>
      <ul>{buttons}</ul>
    </div>
  );
}