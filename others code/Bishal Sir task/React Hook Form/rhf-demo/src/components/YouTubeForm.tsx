import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

type FormValues = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
};
export const YouTubeForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "Batman",
      email: "",
      channel: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["", ""],
    },

    // defaultValues: async () => {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/users/1"
    //   );
    //   const data = await response.json();
    //   return {
    //     username: "Batman",
    //     email: data.email,
    //     channel: "",
    //   };
    // },
  });
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
            validate: {
              notAdmin: (fieldValue) => {
                return (
                  fieldValue !== "admin@example.com" ||
                  "Enter a different email address"
                );
              },
              notBlackListed: (fieldValue) => {
                return (
                  !fieldValue.endsWith("baddomain.com") ||
                  "this is bad email address"
                );
              },
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
        <br /> <br />
        <label htmlFor="twitter">twitter</label>
        <input
          type="text"
          id="twitter"
          {...register("social.twitter", {
            required: "twitter Name is required",
          })}
        />
        {/* <p className="error">{errors.social.twitter?.message}</p> */}
        <br /> <br />
        <br /> <br />
        <label htmlFor="facebook">facebook</label>
        <input type="text" id="facebook" {...register("social.facebook")} />
        <br /> <br />
        <br /> <br />
        <label htmlFor="primary-phone">primary phone number</label>
        <input
          type="text"
          id="facebook"
          {...register("phoneNumbers.0", {
            required: "primary phone number required",
          })}
        />
        {/* <p className="error">{errors.phoneNumbers[0]?.message}</p> */}
        <br /> <br />
        <br /> <br />
        <label htmlFor="secondary-phone">secondary phone number</label>
        <input type="text" id="facebook" {...register("phoneNumbers.1")} />
        <br /> <br />
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
