import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="contact" id="contact">
      <h2 className="title title__2">Contact</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Name <span className="form__span">*</span>
          </label>

          <input
            type="text"
            {...register("name", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
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
          {errors.name?.type === "pattern" && <p>Only letters are allowed.</p>}
        </div>

        <div>
          <label>Your e-mail</label>
          <input
            type="email"
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
              Please, enter your email address in format: yourname@example.com.
            </p>
          )}
        </div>

        <div>
          <label>Message</label>
          <input
            type="text"
            {...register("message", {
              required: true,
              minLength: 10,
              maxLength: 250,
            })}
          />
        </div>
        <input type="submit" value="Send" />
      </form>
    </section>
  );
};

export default Contact;
