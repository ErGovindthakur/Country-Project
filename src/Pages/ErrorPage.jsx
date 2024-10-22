import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-600">Oops!</h1>
        <p className="mt-4 text-lg text-gray-700">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="mt-2 text-gray-500 italic">
          {error.statusText || error.message}
        </p>
        <p>{error.data }</p>
        <button>
        <NavLink to='/' style={{color:'white', textDecoration:'none'}}>
          Go to Homepage
        </NavLink>
        </button>
      </div>
    </div>
  );
};

