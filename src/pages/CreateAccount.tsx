import React, { createRef, useState } from "react";
import { BorderForm, Heading, Error, Input, Submit } from "../components";

export interface CreateAccountProps {
  error?: string;
  onCreateAccount?: (name: string, email: string, password: string) => void;
}

const inputStyle: React.CSSProperties = {
  display: "block",
  margin: "16px auto",
  width: "100%",
};

export const CreateAccount = (props: CreateAccountProps) => {
  const nameRef = createRef<HTMLInputElement>();
  const emailRef = createRef<HTMLInputElement>();
  const passwordRef = createRef<HTMLInputElement>();
  const passwordConfirmRef = createRef<HTMLInputElement>();

  const [passwordError, setPasswordError] = useState<string>();
  const comparePasswords = (pass1?: string, pass2?: string) => {
    if (
      (pass1?.length ?? 0) > 0 &&
      (pass2?.length ?? 0) > 0 &&
      pass1 !== pass2
    ) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError(undefined);
    }
  };

  return (
    <div>
      <BorderForm
        style={{
          display: "inline-block",
          padding: "32px",
          margin: "auto",
        }}
        onSubmit={(event) => {
          event.preventDefault();
          const name = nameRef.current?.value ?? "";
          const email = emailRef.current?.value ?? "";
          const password = passwordRef.current?.value ?? "";
          if (
            !passwordError &&
            name.length > 0 &&
            email.length > 0 &&
            password.length > 0
          ) {
            props.onCreateAccount?.(name, email, password);
          }
        }}
      >
        <Heading
          type="h1"
          style={{
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          Create Account
        </Heading>
        {props.error && <Error error={props.error} />}
        <Input placeholder="Name" style={inputStyle} ref={nameRef} />
        <Input placeholder="Email" style={inputStyle} ref={emailRef} />
        <Input
          placeholder="Password"
          type="password"
          style={inputStyle}
          ref={passwordRef}
          onBlur={() => {
            comparePasswords(
              passwordRef.current?.value,
              passwordConfirmRef.current?.value
            );
          }}
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          style={inputStyle}
          ref={passwordConfirmRef}
          onBlur={() => {
            comparePasswords(
              passwordRef.current?.value,
              passwordConfirmRef.current?.value
            );
          }}
        />
        {passwordError && <Error error={passwordError} />}
        <Submit style={{ marginTop: "16px" }} />
      </BorderForm>
    </div>
  );
};
