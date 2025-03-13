import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError() as Error;
  const { message } = error;

  return <div>{message}</div>;
};

export default Error;
