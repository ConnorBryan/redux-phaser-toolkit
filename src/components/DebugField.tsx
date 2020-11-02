import { OutputSelector } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, RootState } from "store";

interface Props {
  label: string;
  type: "text" | "number";
  settingKey: string;
  selector: OutputSelector<RootState, any, any>;
}

export default function DebugField(props: Props) {
  const dispatch = useDispatch();
  const value = useSelector(props.selector);

  return (
    <>
      <label htmlFor={props.settingKey}>{props.label}</label>
      <br />
      <input
        name={props.settingKey}
        type={props.type}
        value={value}
        onChange={(event) =>
          dispatch(
            actions.debugMenuUpdated(props.settingKey, event.target.value)
          )
        }
      />
    </>
  );
}
