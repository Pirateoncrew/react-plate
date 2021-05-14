import React, { ChangeEvent } from "react";

interface INewNoteInputProps {
  addNote(note: string): void;
}

interface INewNoteInputState {
  note: string;
}

export class NewNoteInput extends React.Component<
  INewNoteInputProps,
  INewNoteInputState
> {
  state: INewNoteInputState = {
    note: "",
  };
  constructor(props) {
    super(props);
    this.updateNote = this.updateNote.bind(this);
    this.onAddNoteClick = this.onAddNoteClick.bind(this);
  }

  componentDidMount() {}

  updateNote(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      note: event.target.value,
    });
  }

  onAddNoteClick() {
    if (this.state.note) {
      this.props.addNote(this.state.note);
      this.setState({
        note: "",
      });
    }
    return;
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.updateNote}
          value={this.state.note}
          name="note"
          placeholder="Note"
        />

        <button onClick={this.onAddNoteClick} disabled={!this.state.note}>
          Add Note
        </button>
      </div>
    );
  }
}

export default NewNoteInput;
