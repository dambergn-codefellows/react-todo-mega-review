import React from 'react';

import NoteItem from './note-item.jsx';

class NoteList extends React.Component {
  constructor(props){
    super(props);
  }
  list(){
    console.log('list', this.props.noteList)
    
    return this.props.noteList.map((notes, index) => {

      return <NoteItem title={notes.title} content={notes.content}
      key={notes.id} index={index}
      removeNote={this.props.removeNote}/>
    });
  }

  render(){
    console.log('render')
    return <ul>
      {this.list()}
      </ul>
  }
}

export default NoteList;