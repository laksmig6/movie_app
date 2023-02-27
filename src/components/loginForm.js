import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    // trigger,
    // setError,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      yourDetails: {
        age: 0,
        place: "",
      },
    },
  });

  console.log(watch(["age", "password"]));

  useEffect(() => {
    const subn = watch((data) => {
      console.log(data);
    });
    return () => {
      subn.unsubscribe();
    };
  }, [watch]);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      console.log("isSubmitSuccessful", isSubmitSuccessful);
      reset({
        ...getValues(),
        password: "Anupama",
        yourDetails: {
          age: 0,
          place: "Chennai",
        },
      });
    }
  }, [formState, reset]);

  return (
    <div className="mt-5 d-flex justify-content-center align-self-center">
      <form
        onSubmit={handleSubmit((data) => {
          console.log("data:", data);
        })}
        className="mt-4 d-flex flex-column"
      >
        <input
          {...register("username", { required: "this is required" })}
          placeholder="username"
          className="mb-2"
        />
        <p>{errors.username?.message}</p>
        <input
          {...register("password", {
            required: "this is required",
            minlength: {
              value: 4,
              required: "Min length is 4",
            },
            validate: (value) => {
              return value === "Anu";
            },
          })}
          placeholder="password"
          className="mb-2"
        />
        <p>{errors.password?.message}</p>
        <input
          className="mb-2"
          type="number"
          {...register("yourDetails.age", {
            required: "this is required",
            valueAsNumber: true,
          })}
          placeholder="age"
        />
        <p>{errors.age?.message}</p>
        <input
          className="mb-2"
          {...register("yourDetails.place", {
            required: "this is required",
          })}
          placeholder="place"
        />
        <p>{errors.place?.message}</p>
        <button
          type="button"
          onClick={() => {
            setValue("yourDetails", {
              age: 10,
              place: "Bangalore",
            });
            // trigger("password", { shouldFocus: true });
            // setError("username", {
            //   type: "custom",
            //   message: "username is wrong",
            // });
          }}
        >
          setValue
        </button>

        <input type="submit"></input>
      </form>
    </div>
  );
};

export default LoginForm;
