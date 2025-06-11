import { useEffect, useState } from "react";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getEmailAsync } from "../redux/composeEmail/composeEmail.reducer";
import {
  selectEmailsFromState,
  selectEmailRequestError,
  selectEmailRequestStatus,
  selectSearchField,
} from "../redux/composeEmail/composeEmail.selector";

// COMPONENTS
import SingleEmail from "./SingleEmail";
import { selectCurrentUser } from "../redux/user/user.selector";

const Emails = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(getEmailAsync(email));
  }, []);

  const emails = useSelector(selectEmailsFromState);
  const status = useSelector(selectEmailRequestStatus);
  const error = useSelector(selectEmailRequestError);
  const searchField = useSelector(selectSearchField);

  // Temp Emails
  const [tempEmails, setTempEmails] = useState(emails);

  useEffect(() => {
    const filteredEmails = emails.filter(
      (email) =>
        email?.subject.toLowerCase().includes(searchField.toLowerCase()) ||
        email?.receiver.toLowerCase().includes(searchField.toLowerCase()) ||
        email?.message.toLowerCase().includes(searchField.toLowerCase())
    );

    setTempEmails(filteredEmails);
  }, [searchField, emails]);

  if (error) return <>Error {error}</>;
  if (status === "loading") return <>Loading Emails...</>;

  return (
    <>
      {tempEmails &&
        tempEmails.map((email) => <SingleEmail key={email.id} email={email} />)}
    </>
  );
};

export default Emails;
