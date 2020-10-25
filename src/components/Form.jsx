import React from "react";
import { FormGroup, FormControl, InputLabel, Input } from "@material-ui/core";

export default function Form() {
  return (
    <FormControl>
      <FormGroup>
        <InputLabel title="Destination">
          <Input autoComplete={true} placeholder="Destination" />
        </InputLabel>
      </FormGroup>
    </FormControl>
  );
}
