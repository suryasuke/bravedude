import React, { useState } from "react";
import "./Collabrate.css";
import { submitCollab } from "../../API/collab";
import Alert from "@mui/material/Alert";
import { LinearProgress } from "@mui/material";

function Collabrate() {
  const [details, setDetails] = useState({
    email: "",
    phone: "",
  });
  const [feedAlert, setFeedAlert] = useState(false);
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await submitCollab(details);

      setMessage(result.data.message);
    } catch (error) {
      setMessage({
        text: "Something went wrong. Please try again.",
        state: "error",
      });
    } finally {
      setFeedAlert(true);
      setLoading(false);

      setTimeout(() => setFeedAlert(false), 4000);

      setDetails({ email: "", phone: "" });
    }
  };

  return (
    <div className="centered-collab">
      <div className="alert-cont-feedback">
        {feedAlert && (
          <Alert
            className="alert-collab"
            severity={message.state}
            style={{
              border: message.state === "success" ? "1px solid green" : "1px solid red",
              color: message.state === "success" ? "green" : "red",
              fontWeight: "500",
            }}
          >
            {message.text}
          </Alert>
        )}
      </div>

      <div className="bg-collabrate">
        <div className="left-collab">
          <p>
            Submit your details for <br /> collabrate with us!
          </p>
        </div>

        <div className="right-collab">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              onChange={handleChange}
              value={details.email}
              placeholder="Email"
              name="email"
              className="collab-input"
              required
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
              value={details.phone}
              className="collab-input"
              required
            />

            {loading ? (
             <div className="progress"><LinearProgress color="error" /></div> 
            ) : (
              <button type="submit">Submit</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Collabrate;
