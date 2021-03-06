import React from 'react';

import Buttons from './components/Buttons'
import Navbar from './components/Navbar';

// Main component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [''],
      focus: 0
    }
  }

  componentDidMount = () => {
    let oldNotes = localStorage.getItem('notes');
    let newNotes = oldNotes ? JSON.parse(oldNotes) : [''];
    this.setState({notes: newNotes});
  }

  addNote = () => {
    this.state.notes.push('');
    this.setState(state => ({notes: state.notes}));
  }

  deleteNote = () => {
    const {notes, focus} = this.state;
    notes.splice(focus, 1);
    this.setState(state => ({notes: state.notes}));
  }

  onChange = e => {
    let newNotes = this.state.notes;
    newNotes[this.state.focus] = e.target.value;
    this.setState({notes: newNotes});
    localStorage.setItem('notes', JSON.stringify(this.state.notes));
  }
  
  switch = i => this.setState({focus:i});
  
  render() {
    const {notes, focus} = this.state;
    const placeholder = `Note #${focus + 1}`;
    
    fetch('/hello')
      .then(res => res.json())
      .then(res => console.log(res));

    return (
      <div>
        <Navbar />

        <div className="text-box">
          <textarea value={notes[focus]} onChange={this.onChange} placeholder={placeholder} />
        </div>

        <div className="buttons">
          <Buttons 
            state={this.state} 
            onClick={this.switch} 
            addNote={this.addNote} 
            deleteNote={this.deleteNote}
          />
        </div>

      </div>
    )
  }
}

export default App;
