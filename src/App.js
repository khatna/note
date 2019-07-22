import React from 'react';

// Buttons component: render the buttons representing separate notes
function Buttons(props) {
  const buttons = props.notes.map((note, i) => 
    <li key={i} style={{ listStyleType: "none" }}>
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
    this.state.notes.push('');
    this.setState(state => ({notes: state.notes}));
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
        <div class="text-box">
          <textarea value={notes[focus]} onChange={this.onChange} placeholder="Teneg sda min yumaa bich" />
        </div>
        <div class="buttons">
          <button onClick={this.addNote}>Add note</button>
          <Buttons notes={notes} onClick={this.switch} />
        </div>
      </div>
    )
  }
}

export default App;
