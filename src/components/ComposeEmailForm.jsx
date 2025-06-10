import { useState } from "react";

// REDUX
import { useDispatch } from "react-redux";
import { sendEmailAsync } from "../redux/composeEmail/composeEmail.reducer";

const defaultFormFields = {
  receiver: "",
  subject: "",
  message: "",
};

const ComposeEmailForm = () => {
  // LOCAL STATE
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { receiver, subject, message } = formFields;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  // REDUX
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(sendEmailAsync(formFields));
      setFormFields(defaultFormFields);
    } catch (err) {
      console.error("Email failed: ", err);
    }
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col p-3 gap-2">
      <input
        type="text"
        placeholder="To"
        name="receiver"
        value={receiver}
        className="outline-none py-1 border-b border-gray-200"
        onChange={onChangeHandler}
      />
      <input
        type="text"
        placeholder="Subject"
        name="subject"
        value={subject}
        className="outline-none py-1 border-b border-gray-200"
        onChange={onChangeHandler}
      />
      <textarea
        type="text"
        name="message"
        value={message}
        cols="30"
        rows="16"
        className="outline-none py-1"
        onChange={onChangeHandler}
      />
      <button
        type="submit"
        className="bg-[#0B57D0] rounded-full w-fit px-4 py-2 text-white font-medium cursor-pointer hover:bg-[#0b57d0e8]"
      >
        Send
      </button>
    </form>
  );
};

export default ComposeEmailForm;
