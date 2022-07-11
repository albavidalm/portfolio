import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from "./Modal";
import Button from "./ui/Button";
import ContactSN from "./ContactSN";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (formData) => {
    emailjs
      .send(
        "service_5bmhrls",
        "template_b6hma19",
        formData,
        "gBsoMP8xvVWSHOoXF"
      )
      .then(
        (res) => {
          console.log(res.text);
          setShowModal(!showModal);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="contact" id="contact">
        <h2 className="title title__2">Contact</h2>
        <p className="contact__text">
          Do you you have any question, want to collaborate or just want to say
          hi?. Fill in your info in the form below, I’d love to hear from you!.
        </p>

        <form onSubmit={handleSubmit(sendEmail)}>
          <div>
            {/* <label>Name</label> */}

            <input
              type="text"
              placeholder="Your name"
              {...register("name", {
                required: true,
                pattern: /^[a-zA-Z\s]*$/,
                minLength: 3,
                maxLength: 10,
              })}
            />
            {errors.name?.type === "required" && (
              <p>Name is required. Please complete this field to continue.</p>
            )}
            {errors.name?.type === "minLength" && (
              <p>Use at least 3 characters.</p>
            )}
            {errors.name?.type === "maxLength" && (
              <p>Use a maxium of 15 characters.</p>
            )}
            {errors.name?.type === "pattern" && (
              <p>Only letters are allowed.</p>
            )}
          </div>

          <div>
            {/* <label>Your e-mail</label> */}
            <input
              type="email"
              placeholder="E-mail"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              })}
            />
            {errors.email?.type === "required" && (
              <p>Email is required. Please complete this field to continue.</p>
            )}
            {errors.email?.type === "pattern" && (
              <p>
                Please, enter your email address in format:
                yourname@example.com.
              </p>
            )}
          </div>

          <div>
            {/* <label>Message</label> */}
            <input
              type="text"
              placeholder="Message"
              {...register("message", {
                required: true,
                minLength: 10,
                maxLength: 250,
              })}
            />
            {errors.message?.type === "required" && (
              <p>
                I need your message. Please complete this field to continue.
              </p>
            )}
            {errors.message?.type === "minLength" && (
              <p>Use at least 10 characters.</p>
            )}
            {errors.message?.type === "maxLength" && (
              <p>Use a maxium of 250 characters.</p>
            )}
          </div>
          <input type="submit" value="Send" />
        </form>
        <ContactSN />
      </section>

      {showModal && (
        <Modal>
          <i className="far fa-paper-plane"></i>
          <p>Thanks for your message.</p>
          <Button onClickModal={() => setShowModal(!showModal)}>Close</Button>
        </Modal>
      )}
    </>
  );
};

export default Contact;
