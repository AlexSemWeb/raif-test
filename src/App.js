import React, { useState } from "react";
import SecondScreen from "./views/components/SecondScreen";
import Index from "./views/Index";
import { Body, Stepper } from "vienna-ui";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const style = {
  position: "relative",
  color: "#2b2d33",
  boxSizing: "border-box",
  maxWidth: "964px",
  margin: "auto",
};

export default function App() {
  const [number, setValue] = useState(false);
  let [step, setStep] = useState("1");

  const updateData = (value) => {
    if (value) {
      setValue(true);
      setStep("2");
    }
  };
  return (
    <div style={style}>
      <Body>
        <Stepper value={step} size="s">
          <Stepper.Step value="1">Заголовок шага №1</Stepper.Step>
          <Stepper.Step value="2">Заголовок шага №2</Stepper.Step>
          <Stepper.Step value="3">Заголовок шага №3</Stepper.Step>
        </Stepper>
        <SwitchTransition>
          <CSSTransition
            key={number}
            addEndListener={(node, done) =>
              node.addEventListener("transitionend", done, false)
            }
            classNames="fade"
          >
            {number ? <SecondScreen /> : <Index updateData={updateData} />}
          </CSSTransition>
        </SwitchTransition>
      </Body>
    </div>
  );
}
