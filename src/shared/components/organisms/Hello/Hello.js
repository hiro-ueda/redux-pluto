/* @flow */
import React from "react";

type Props = {
  isVisible: boolean,
  comments: Array<{ id: string, text: string }>,
  onChangeVisibility: Function,
};

export default function Hello(props: Props) {
  const { isVisible, onChangeVisibility, comments } = props;
  return (
    <div>
      {isVisible &&
        comments.map(comment => <div key={comment.id}>{comment.text}</div>)}
      <button type="button" onClick={() => onChangeVisibility()}>
        {isVisible ? "hide" : "show"}
      </button>
    </div>
  );
}
