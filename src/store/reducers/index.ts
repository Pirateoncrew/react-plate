export interface IInitialState {
  notes: string[];
}
const initState: IInitialState = {
  notes: [],
};
type Action = { type: "Add_NOTE"; payload: string };
const rootReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case "Add_NOTE": {
      console.log(action, state);
      return { ...state, notes: [...state.notes, action.payload] };
    }

    default:
      return state;
  }
};

export default rootReducer;
