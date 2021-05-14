import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { addNote } from "../store/actions";
import NewNoteInput from "../components/newNoteInput";
import { IInitialState } from "../store/reducers";
type Props = {
  addNote: () => void;
  notes: string[];
};
class Home extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log(this.props.notes);
  }

  head() {
    return (
      <Helmet>
        <title>My Page title</title>
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        <NewNoteInput addNote={this.props.addNote} />
        <ul>
          {this.props.notes?.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: IInitialState) => {
  return {
    notes: state.notes,
  };
};

const mapDispatchToProps = {
  addNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
