// const success = () => toast.dark("Successfully Sent");
//   const failure = () => toast.error("Something went wrong");
//   console.log(process.env.REACT_APP_SERVICE_ID);
//   console.log(process.env);
//   const handleSend = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         process.env.REACT_APP_SERVICE_ID,
//         process.env.REACT_APP_TEMPLATE_ID,
//         e.target,
//         process.env.REACT_APP_USER_ID
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           success();
//         },
//         (error) => {
//           console.log(error.text);
//           failure();
//         }
//       );
//     e.target.reset();