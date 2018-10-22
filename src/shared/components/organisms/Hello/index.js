import { compose } from "recompose";
import { connect } from "react-redux";
import { asyncLoader } from "redux-async-loader";
import { changeVisibility, getComments } from "../../../redux/modules/hello";
import Hello from "./Hello";

export default compose(
  asyncLoader((props, store) => store.dispatch(getComments())),
  connect(
    state => ({
      isVisible: state.page.hello.isVisible,
      comments: state.page.hello.comments,
    }),
    dispatch => ({
      onChangeVisibility: () => dispatch(changeVisibility()),
    }),
  ),
)(Hello);
