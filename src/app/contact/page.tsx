"use client";

import Image from "next/image";

// import { useState, ChangeEvent, FormEvent } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// interface IFormState {
//   name: string;
//   email: string;
//   message: string;
// }

export default function Contact() {
  // const [formState, setFormState] = useState<IFormState>({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const sendEmail = async (event: FormEvent) => {
  //   event.preventDefault();

  //   try {
  //     const res = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formState),
  //     });

  //     console.log(formState);
  //     console.log(res);

  //     setFormState({ name: "", email: "", message: "" });

  //     toast.success("Message sent", {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   } catch (error) {
  //     toast.error("Error while sending message", {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  // };

  return (
    <div className="flex justify-start items-center">
      <p>
        Please send an email to{" "}
        <a href="mailto:moin@melvinrinkleff.de"> moin@melvinrinkleff.de </a>
      </p>
    </div>

    // <form onSubmit={sendEmail} className="ml-4">
    //   <div className="form-group mt-4 bg-lightblue-100 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
    //     <input
    //       type="text"
    //       name="name"
    //       placeholder="Your name"
    //       value={formState.name}
    //       onChange={(e) => setFormState({ ...formState, name: e.target.value })}
    //     />
    //   </div>
    //   <div className="form-group mt-4 bg-lightblue-100 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
    //     <input
    //       type="email"
    //       name="email"
    //       placeholder="Your email"
    //       value={formState.email}
    //       onChange={(e) =>
    //         setFormState({ ...formState, email: e.target.value })
    //       }
    //       required
    //     />
    //   </div>
    //   <div className="form-group mt-4 bg-lightblue-100 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
    //     <textarea
    //       name="message"
    //       placeholder="Your message"
    //       value={formState.message}
    //       onChange={(e) =>
    //         setFormState({ ...formState, message: e.target.value })
    //       }
    //       required
    //     />
    //   </div>
    //   <div className="form-group mt-4">
    //     <button
    //       type="submit"
    //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //     >
    //       Send
    //     </button>
    //   </div>
    //   <ToastContainer />
    // </form>
  );
}
