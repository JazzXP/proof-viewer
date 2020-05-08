import React, { createRef } from "react";
import { Link, Error, Heading, Input, Submit, BorderForm } from "../components";

export interface LoginProps {
  error?: string;
  onLogin?: (email?: string, password?: string) => void;
}

export const Login = (props: LoginProps) => {
  const emailRef = createRef<HTMLInputElement>();
  const passwordRef = createRef<HTMLInputElement>();

  return (
    <div>
      <BorderForm
        style={{
          display: "inline-block",
          padding: "32px",
          margin: "auto",
        }}
        onSubmit={(event) => {
          props.onLogin?.(
            emailRef?.current?.value,
            passwordRef?.current?.value
          );
          event.preventDefault();
        }}
      >
        <Heading
          type="h1"
          style={{
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          Login
        </Heading>
        {props.error && <Error error={props.error} />}
        <Input
          style={{
            display: "block",
            margin: "16px auto",
            width: "100%",
          }}
          placeholder="Email"
          ref={emailRef}
        />
        <Input
          style={{
            display: "block",
            margin: "16px auto",
            width: "100%",
          }}
          placeholder="Password"
          type="password"
          ref={passwordRef}
        />
        <Submit style={{ margin: "auto", display: "block" }} />
        <Link
          to="/create-account"
          style={{
            textAlign: "center",
            marginTop: "16px",
            display: "block",
          }}
        >
          Create new account
        </Link>
      </BorderForm>
    </div>
  );
};
