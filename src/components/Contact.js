import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from "./Modal";
import Button from "./ui/Button";
import { useTranslation } from "react-i18next";

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
  const [t] = useTranslation("contact");
  return (
    <>
      <section className="contact wrapper" id="contact">
        <h2 className="title title__2">{t("title")}</h2>
        <p className="contact__text">{t("info")}</p>

        <form onSubmit={handleSubmit(sendEmail)}>
          <div className="form__div">
            <input
              className="form__div--input"
              type="text"
              placeholder={t("form.placeholder.name")}
              {...register("name", {
                required: true,
                pattern: /^[a-zA-Z\s]*$/,
                minLength: 3,
                maxLength: 10,
              })}
            />
            {errors.name?.type === "required" && (
              <p className="form__error">{t("form.error.name.required")}</p>
            )}
            {errors.name?.type === "minLength" && (
              <p className="form__error">{t("form.error.name.min")}</p>
            )}
            {errors.name?.type === "maxLength" && (
              <p className="form__error">{t("form.error.name.max")}</p>
            )}
            {errors.name?.type === "pattern" && (
              <p className="form__error">{t("form.error.name.type")}</p>
            )}
          </div>

          <div className="form__div">
            {/* <label>Your e-mail</label> */}
            <input
              className="form__div--input"
              type="email"
              placeholder="E-mail"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              })}
            />
            {errors.email?.type === "required" && (
              <p className="form__error">{t("form.error.email.required")}</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="form__error">{t("form.error.email.type")}</p>
            )}
          </div>

          <div className="msg">
            {/* <label>Message</label> */}
            <textarea
              className="msg__input"
              type="textbox"
              placeholder={t("form.placeholder.message")}
              {...register("message", {
                required: true,
                minLength: 10,
                maxLength: 250,
              })}
            />
            {errors.message?.type === "required" && (
              <p className="form__error">{t("form.error.message.required")}</p>
            )}
            {errors.message?.type === "minLength" && (
              <p className="form__error">{t("form.error.message.min")}</p>
            )}
            {errors.message?.type === "maxLength" && (
              <p className="form__error">{t("form.error.message.max")}</p>
            )}
          </div>
          {/* <input type="submit" value="Send" className="btn" /> */}
          <button className="btn send" type="submit"></button>
        </form>
      </section>

      {showModal && (
        <Modal>
          <i className="far fa-paper-plane"></i>
          <p>{t("modal.thanks")}</p>
          <Button onClickModal={() => setShowModal(!showModal)}>
            {t("modal.close")}
          </Button>
        </Modal>
      )}
    </>
  );
};

export default Contact;
