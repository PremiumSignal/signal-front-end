import { Button } from "react-bootstrap";
import "../loginComponents/pracise.css";
import { useState } from "react";

function JoinOurCommunity() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("password:", message);
  };
  return (
    <div className="addUser">
      <h3>Join Our Community</h3>
      <form className="addUserForm" onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            autoComplete="off"
            placeholder="Enter your name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            required
            value={email}
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="Message">Message:</label>
          <input
            type="message"
            id="message"
            name="message"
            required
            autoComplete="off"
            placeholder="Enter message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type="submit" className="btn btn-primary" variant="success">
            Join
          </Button>
        </div>
      </form>
    </div>
  );
}

export default JoinOurCommunity;
