import React from "react";
import NavBar from "../Components/Stateless/NavBar";
import Button from "../Components/Stateless/Button";

export default function Contact() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully");

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="text-center">

      <NavBar />

      <section className="h-screen flex-col items-center justify-center mt-25 pt-8">

        <h1 className="text-4xl font-bold my-8 text-red-500">Contact</h1>

        <form className="flex-col space-y-4 max-w-1/3 mx-auto">
        
        <h5 className="text-md font-light text-center">Send me a message! Please wait up to 1 - 2 business days</h5>

         <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="border-2 border-gray-300 p-2 w-full"
         />
          
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="border-2 border-gray-300 p-2 w-full"
          />

          

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border-2 border-gray-300 p-2 w-full"
          />

          <textarea
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message here"
            className="border-2 border-gray-300 p-2 w-full"></textarea>

          <Button
            text="Submit"
            type="submit"
            onClick={handleSubmit}
            className="bg-red-500 hover:bg-red-600 py-3 mt-4 text-white font-bold rounded-sm transition ease-in-out duration-250 w-full"
          />

        </form>

      </section>
    </div>
  );
}
