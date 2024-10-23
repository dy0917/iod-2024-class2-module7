import { useEffect, useState } from "react";
import { useFormInput } from "../utils/formInputHook";
import { useUserContext } from "../context/userContext";

export default function SubscribeForm() {
  const [status, setStatus] = useState("");

  const { currentUser } = useUserContext();
  console.log("currentUser", currentUser ? currentUser.firstName : undefined);
  // similar state variables mapped to form inputs

  //   const [firstName, setFirstName] = useState("Mary");
  //   const [email, setEmail] = useState("mary@poppins.com");
  const [firsttNameniputProps, firstNameReset] = useFormInput("");

  const [emailInputProps, reset] = useFormInput("mary@poppins.com");
  // similar handler functions

  useEffect(() => {
    firsttNameniputProps.init(currentUser.firstName);
  }, [currentUser]);

  function handleSubscribe() {
    firstNameReset();
    reset();
    setStatus("Thanks for subscribing!");
  }
  return (
    <div className="SubscribeForm componentBox">
      <label>
        First name: {/* form inputs with similar props */}
        <input
          value={firsttNameniputProps.value}
          onChange={firsttNameniputProps.handleChange}
        />
      </label>
      <label>
        Email: {/* form inputs with similar props */}
        <input {...emailInputProps} />
      </label>
      <button onClick={handleSubscribe}>Subscribe</button>
      <div>{status}</div>
    </div>
  );
}
