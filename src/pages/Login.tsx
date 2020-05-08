import React, { createRef } from "react";
import { Link, Error, Heading, Input, Submit, BorderForm } from "../components";
import theme from "../Theme";

export interface LoginProps {
  error?: string;
  onLogin?: (username?: string, password?: string) => void;
}

export const Login = (props: LoginProps) => {
  const usernameRef = createRef<HTMLInputElement>();
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
            usernameRef?.current?.value,
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
          placeholder="Username"
          name="username"
          ref={usernameRef}
        />
        <Input
          style={{
            display: "block",
            margin: "16px auto",
            width: "100%",
          }}
          placeholder="Password"
          type="password"
          name="password"
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
