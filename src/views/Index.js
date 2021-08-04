import React, { useState } from "react";
import { Close, Checkmark } from "vienna.icons";
import {
  Groups,
  Card,
  FormField,
  InputPhone,
  Button,
  Spinner,
  Checkbox,
} from "vienna-ui";

function Index(props) {
  const closeColor = {
    position: "absolute",
    top: "9px",
    right: "0",
  };

  const formFieldStyle = {
    position: "relative",
  };

  const inputRef = React.createRef();

  const [isComplete, setFocused] = useState(null);
  const [value, setValue] = useState("");

  const change = (e, data) => {
    setFocused(null);
    setValue(data.value);
  };
  const blur = () => {
    if (value.length === 18) {
      setFocused(true);
    } else {
      setFocused(false);
    }
  };

  const clickBtn = () => {
    if (value.length < 18 || isComplete === false) {
      setFocused(false);
      inputRef.current.focus();
    } else {
      props.updateData(value);
    }
  };

  const clearInput = () => {
    setFocused(null);
    setValue("");
    inputRef.current.focus();
  };

  const completeBlock = () => {
    if (isComplete) {
      return (
        <Checkmark color={"green"} size={"l"} style={closeColor}></Checkmark>
      );
    } else if (isComplete === false && value.length > 1) {
      return (
        <Close
          color={"red"}
          size={"l"}
          style={closeColor}
          onClick={clearInput}
        ></Close>
      );
    }
  };

  return (
    <div>
      <Spinner></Spinner>
      <Checkbox checked />
      <Card
        title="Введите номер телефона"
        footer={
          <Groups justifyContent="flex-end">
            <Button design="accent" onClick={clickBtn}>
              Далее
            </Button>
          </Groups>
        }
      >
        <Groups design="vertical">
          <FormField style={{ width: "100%" }}>
            <FormField.Label>Мобильный телефон</FormField.Label>
            <FormField.Content style={formFieldStyle}>
              <InputPhone
                value={value}
                design={"material"}
                onChange={change}
                onBlur={blur}
                ref={inputRef}
                invalid={isComplete === false}
              />
              {completeBlock()}
              {isComplete === false && (
                <FormField.Message color="critical">
                  Введите полный номер телефона
                </FormField.Message>
              )}
            </FormField.Content>
          </FormField>
        </Groups>
      </Card>
    </div>
  );
}

export default Index;
