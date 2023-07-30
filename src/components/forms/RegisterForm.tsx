import React from "react";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.table(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" {...register("name")} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register("email")} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" {...register("password")} />
      </div>
      <div className="form-group">
        <label htmlFor="confirm_passowrd">Confirm password:</label>
        <input
          type="password"
          id="confirm_password"
          {...register("confirm_password")}
        />
      </div>
      <input type="submit" value="Create" />
    </form>
  );
}
