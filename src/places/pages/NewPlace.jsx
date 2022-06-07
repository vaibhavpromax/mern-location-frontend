import React, { useCallback, useReducer } from "react";
import Button from "../../shared/components/FormElements/Button";
import { Input } from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

import "./PlaceForm.css";

const NewPlace = () => {
const [formState , inputHandler ]=  useForm({
    title: {
      input: " ",
      isValid: false,
    },
    description: {
      input: " ",
      isValid: false,
    },
    address: {
      input: " ",
      isValid: false,
    },
  },false);

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };



  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please Enter a valid title"
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textArea"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please Enter a valid Description"
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        type="text"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please Enter a valid Address"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
