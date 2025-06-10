import { useEffect } from "react";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getEmailAsync } from "../redux/composeEmail/composeEmail.reducer";
import {
  selectEmailsFromState,
  selectEmailRequestError,
  selectEmailRequestStatus,
} from "../redux/composeEmail/composeEmail.selector";

// COMPONENTS
import SingleEmail from "./SingleEmail";

const Emails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmailAsync());
  }, []);

  const emails = useSelector(selectEmailsFromState);
  const status = useSelector(selectEmailRequestStatus);
  const error = useSelector(selectEmailRequestError);

  if (error) return <>Error {error}</>;
  if (status === "loading") return <>Loading Emails...</>;

  return (
    <>
      {emails.map((email) => (
        <SingleEmail key={email.id} email={email} />
      ))}
    </>
  );
};

export default Emails;
