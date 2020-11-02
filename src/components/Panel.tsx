import React from "react";

interface Props {
  title: string;
  children?: React.ReactNode;
}

export default function Panel(props: Props) {
  return (
    <fieldset
      style={{
        position: "relative",
        padding: 10,
      }}
    >
      <legend
        style={{
          letterSpacing: 3,
          textTransform: "uppercase",
        }}
      >
        {props.title}
      </legend>
      {props.children}
    </fieldset>
  );
}
