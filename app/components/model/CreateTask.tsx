"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface IFormInput {
  title: string;
  description: string;
  lastName: string;
  date: string;
  completed: boolean;
  impotant: boolean;
}

const CreateTask = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const payload = {
      ...data,
      date: new Date(data.date).toISOString(), // ISO Format এ রূপান্তর
      completed: !!data.completed, // Boolean মানে রূপান্তর
      impotant: !!data.impotant, // Boolean মানে রূপান্তর
    };
    console.log(payload);

    try {
      const res = await axios.post("/api/task", payload);
      console.log(res.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "API Error:",
          error.response?.data || "Unknown Axios error"
        );
      } else {
        console.error("Unexpected Error:", error);
      }
    }
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <form className="w-full mx-auto" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Title
                </label>
                <input
                  type="text"
                  id="email"
                  {...register("title", { required: true })}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Description
                </label>
                <input
                  type="text"
                  {...register("description", { required: true })}
                  id="password"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Repeat password
                </label>
                <input
                  type="date"
                  {...register("date", { required: true })}
                  id="repeat-password"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>

              <div className="p-2">
                <label htmlFor="">Toggle completed</label>
                <input
                  type="checkbox"
                  {...register("completed", {})}
                  className="mx-3"
                />
              </div>

              <div className="p-2">
                <label htmlFor="">Toggle impotant</label>
                <input
                  type="checkbox"
                  {...register("impotant", {})}
                  className="mx-3"
                />
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register new account
              </button>
            </form>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CreateTask;
