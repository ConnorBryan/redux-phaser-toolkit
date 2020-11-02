import { OutputSelector } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, RootState } from "store";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  settingKey: string;
  selector: OutputSelector<RootState, any, any>;
}

export default function DebugField(props: Props) {
  const dispatch = useDispatch();
  const { settingKey, selector, ...rest } = props;
  const value = useSelector(selector);

  return (
    <div
      style={{
        marginBottom: 5,
      }}
    >
      <label htmlFor={props.settingKey}>{props.label}</label>
      <br />
      <input
        name={props.settingKey}
        value={value}
        onChange={(event) =>
          dispatch(
            actions.debugMenuUpdated(props.settingKey, event.target.value)
          )
        }
        {...rest}
      />
    </div>
  );
}
