import React, { useCallback, useReducer } from "react";
import Button from "../../shared/components/FormElements/Button";
import { Input } from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import "./NewPlace.css";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    //inputs store info about ind inputs
    inputs: {
      title: {
        input: " ",
        isValid: false,
      },
      description: {
        input: " ",
        isValid: false,
      },
    },
    //isValid stores info about overall form validity
    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    const action = {
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    };
    dispatch(action);
  }, []);

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please Enter a valid title"
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textArea"
        type="text"
        label="description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please Enter a valid Description"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
