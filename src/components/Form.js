// import React, { useState } from "react";
// // import ReactGA from "react-ga4";
// const Form = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [isValid, setIsValid] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
   
//     console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
//   };

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleValidation = () => {
//     if (name && email && message) {
//       setIsValid(true);
//     } else {
//       setIsValid(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           className="form-control"
//           id="name"
//           name="name"
//           value={name}
//           onChange={handleNameChange}
//           onBlur={handleValidation}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           className="form-control"
//           id="email"
//           name="email"
//           value={email}
//           onChange={handleEmailChange}
//           onBlur={handleValidation}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="message">Message:</label>
//         <textarea
//           className="form-control"
//           id="message"
//           name="message"
//           rows="3"
//           value={message}
//           onChange={handleMessageChange}
//           onBlur={handleValidation}
//         ></textarea>
//       </div>
//       <button type="submit" className="btn btn-primary" disabled={!isValid}>
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Form;
