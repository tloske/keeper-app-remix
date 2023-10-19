import { json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

export async function action() {
  return json({ loggedIn: true });
}

export default function Login() {
  const actionData = useActionData<typeof action>();
  return actionData?.loggedIn ? (
    <div>
      <h1>Logged In</h1>
    </div>
  ) : (
    <div>
      <Form method="post" className="login-form">
        <div className="mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            placeholder="Username"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </div>
  );
}
