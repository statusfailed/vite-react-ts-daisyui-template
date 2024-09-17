import { useRouteError } from "react-router-dom";

interface ErrorType {
  statusText: string;
  message: string;
}

export function Page() {
  const error = useRouteError() as ErrorType;
  console.error(error);

  return (
    <div className="flex justify-center mt-24">
      <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-red-500">{error.statusText}</h1>
        <p className="mt-2 text-lg text-gray-700">{error.message}</p>
      </div>

    </div>
  );
}
