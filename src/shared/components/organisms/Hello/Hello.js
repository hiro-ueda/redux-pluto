/* @flow */
import React from "react";

type Props = {
  isVisible: boolean,
  onChangeVisibility: Function,
};

export default function Hello(props: Props) {
  const { isVisible, onChangeVisibility } = props;
  return (
    <div>
      {isVisible && <div>Hello!</div>}
      <button type="button" onClick={() => onChangeVisibility()}>
        {isVisible ? "hide" : "show"}
      </button>
    </div>
  );
}
