/* eslint-disable react/destructuring-assignment */
import * as React from "react";

export interface HelloProps {
  testProp: string;
}

export const Hello = (props: HelloProps) => (
  <h1>{`Hello ${props.testProp}!`}</h1>
);
