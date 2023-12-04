import React from "react";

const App = () => {
  return (
    <>
      <div className="w-full h-screen relative flex items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 shadow-xl shadow-black ">
        <img
          src="src\lg.jpg"
          alt=""
          className="absolute w-24 border border-black rounded-xl -translate-x-69 -translate-y-80 h-24"
        />
        <div className="w-4/6 h-5/6  rounded-lg flex flex-row">
          <div className="w-2/5 h-full ">
            <img
              src="src\img.png"
              alt=""
              className="object-center object-conver rounded-l-lg w-full h-full"
            />
          </div>
          <div className="w-3/5 h-full bg-slate-200 flex flex-col rounded-r-lg">
            <div className="h-1/5 w-full  px-16 flex items-center text-5xl font-semibold">
              <h1>Log In </h1>
            </div>
            <div className="h-3/5 w-full  px-16 flex flex-col  ">
              <h2 className="text-2xl light pt-5 pb-3 font-semibold">Email</h2>
              <input
                type="text"
                className="w-5/6 h-12 border-2 border-green-300 px-2"
                placeholder="Enter your email"
              />
              <h2 className="text-2xl light pt-6 pb-3 font-semibold">
                Password
              </h2>
              <input
                type="password"
                className="w-5/6 h-12 border-2 border-green-300 px-2 "
                placeholder="Enter your password"
              />
              <div className="flex flex-row items-center pt-6 gap-2">
                <input type="checkbox" className="w-6 h-6" />
                <h2 className="text-xl light font-semibold">Remember me</h2>
              </div>
              <div className="flex flex-row items-center gap-4 pt-8">
                <button className="border border-black w-32 h-10 hover:scale-105 rounded bg-green-300 text-lg font-semibold ">
                  Login
                </button>
                <div className="flex gap-1 font-semibold">
                  <h1>New user?</h1>
                  <a href=""> Sign up</a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-8 justify-center">
              <div className="font-semibold">
                <p>----------Or Login With----------</p>
              </div>
              <div className="h-1/5 w-full  px-16 flex flex-row items-center justify-center gap-8  ">
                <button className="w-32 h-10 rounded hover:scale-105 border border-black text-white bg-red-600">
                  Google
                </button>
                <button className="w-32 h-10 rounded hover:scale-105 border border-black text-white bg-blue-600">
                  Facebook
                </button>
                <button className="w-32 h-10 rounded hover:scale-105 border border-black text-white bg-black">
                  Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
