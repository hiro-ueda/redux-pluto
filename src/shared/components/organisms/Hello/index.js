import { compose } from "recompose";
import { connect } from "react-redux";
import { changeVisibility } from "../../../redux/modules/hello";
import Hello from "./Hello";

export default compose(
  connect(
    state => ({
      isVisible: state.page.hello.isVisible,
    }),
    dispatch => ({
      onChangeVisibility: () => dispatch(changeVisibility()),
    }),
  ),
)(Hello);
