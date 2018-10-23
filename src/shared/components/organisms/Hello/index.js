import { compose } from "recompose";
import { connect } from "react-redux";
import { asyncLoader } from "redux-async-loader";
import { reduxForm } from "redux-form";
import {
  changeVisibility,
  getComments,
  postComment,
} from "../../../redux/modules/hello";
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
  reduxForm({
    form: "hello",
    onSubmit(values, dispatch) {
      dispatch(postComment(values));
    },
  }),
)(Hello);
