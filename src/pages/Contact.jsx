import { useEffect, useState } from "react";

function Contact({ onAddMessage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  useEffect(() => {
    document.title = "Blue Eva | Contact";
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (name.trim() === "") validationErrors.name = "Name is required";

    if (email.trim() === "") validationErrors.email = "Email is required";
    else if (!email.includes("@")) validationErrors.email = "Enter valid email";

    if (message.trim() === "") validationErrors.message = "Message is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      const newMessage = {
        id: Date.now(),
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      };

      onAddMessage(newMessage);

      setSuccess("Your message has been sent successfully!");
      setErrors({});
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="wrap">
      <div className="pagehead">
        <span className="eyebrow">Contact</span>
        <h1>Ask us anything.</h1>
        <p>
          Not sure which scent suits you? Tell us what you usually wear and we'll suggest three.
        </p>
      </div>

      <div className="contact">
        <form onSubmit={handleSubmit} noValidate>
          <div className="two">
            <div className="field">
              <div htmlFor="cn">Name</div>
              <input id="cn" value={name} onChange={(e) => setName(e.target.value)} />
              {errors.name && <p className="err">{errors.name}</p>}
            </div>
            <div className="field">
              <div htmlFor="ce">Email</div>
              <input
                id="ce"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="err">{errors.email}</p>}
            </div>
          </div>

          <div className="field">
            <div htmlFor="cm">Message</div>
            <textarea
              id="cm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && <p className="err">{errors.message}</p>}
          </div>

          <button className="btn" type="submit">Send message</button>
          {success && <p className="ok">{success}</p>}
        </form>

        <div className="infobox">
          <div><b>Shop</b>Hamra Street, Beirut</div>
          <div><b>Hours</b>Mon to Sat, 10:00 to 19:00</div>
          <div><b>Email</b>hello@blueeva.example</div>
          <div><b>Phone</b>+961 1 000 000</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
