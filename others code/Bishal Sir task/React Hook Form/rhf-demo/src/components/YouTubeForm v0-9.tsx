import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

type FormValues = {
  username: string;
  email: string;
  channel: string;
};
export const YouTubeForm = () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  // const { name, ref, onChange, onBlur } = register("username");

  const onSubmit = (data: FormValues) => {
    console.log("form submitted", data);
  };
  renderCount++;
  return (
    <div>
      <h1>YouTube Form ({renderCount / 2})</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">username</label>
        <input
          type="text"
          id="usernmae"
          // name={name}
          // ref={ref}
          // onChange={onChange}
          // onBlur={onBlur}
          {...register("username", {
            required: "Username is required",
          })}
        />
        <p className="error">{errors.username?.message}</p>
        <br /> <br />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,  

              message: "Invalid Email",
            },
          })}
        />
        <p className="error">{errors.email?.message}</p>
        <br /> <br />
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          {...register("channel", {
            required: "channel Name is required",
          })}
        />
        <p className="error">{errors.channel?.message}</p>
        <br /> <br />
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
