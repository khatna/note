import React from 'react';

// Buttons component: render the buttons representing separate notes
function Buttons(props) {
  const buttons = props.notes.map((note, i) => 
    <li  key={i} style={{ listStyleType: "none" }}>
      <button onClick={() => props.onClick(i)}>
        Note #{i+1} ({note.substring(0,10)}...)
      </button>
    </li>
  );

  return <ul>{buttons}</ul>
}

// Main component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [''],
      focus: 0
    }
  }

  addNote = () => {
    let newNotes = this.state.notes;
    newNotes.push('');
    this.setState({notes: newNotes});
  }

  onChange = e => {
    let newNotes = this.state.notes;
    newNotes[this.state.focus] = e.target.value;
    this.setState({notes: newNotes});
  }
  
  switch = i => this.setState({focus:i});
  
  render() {
    const {notes, focus} = this.state;

    return (
      <div>
        <h1>Note #{focus+1}</h1>
        <textarea value={notes[focus]} onChange={this.onChange}/>
        <Buttons notes={notes} onClick={this.switch} />
        <button onClick={this.addNote}>Add note</button>
      </div>
    )
  }
}

export default App;
