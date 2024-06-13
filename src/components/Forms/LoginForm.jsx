import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Data >>", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-y-4">
        <div>
          <label htmlFor="email" className="block text-sm mb-2 ">
            Email address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              className="py-3 px-4 block w-full border-[1px] border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary "
              aria-describedby="email-error"
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email",
                },
              })}
            />
            <p className="text-xs text-red-600 mt-2" role="alert">
              {errors.email?.message}
            </p>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <label htmlFor="password" className="block text-sm mb-2">
              Password
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              className="py-3 px-4 block w-full border-[1px] border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary  "
              aria-describedby="password-error"
              {...register("password", {
                required: "password is required",
                minLength: 8,
                maxLength: 26,
              })}
            />
            {errors.password?.type == "minLength" && (
              <p className="text-xs text-red-600 mt-2" role="alert">
                At least 8 Characters
              </p>
            )}
            {errors.password?.type == "maxLength" && (
              <p className="text-xs text-red-600 mt-2" role="alert">
                Max 26 Characters
              </p>
            )}
            <p className="text-xs text-red-600 mt-2" role="alert">
              {errors.password?.message}
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="text-white py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-normal bg-primary"
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
