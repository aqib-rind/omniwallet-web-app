import React from "react";
import SignupForm from "../components/Forms/SignupForm";
import { Link } from "react-router-dom";
import Baselayout from "../components/Layouts/Baselayout";

function Signup() {
  return (
    <Baselayout>
      <main className="w-full max-w-3xl mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm ">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-3xl font-bold text-gray-800 ">
                Create your Account
              </h1>
              <p className="mt-2 text-sm text-gray-600 ">
                Already have an account?
                <Link to="/login">
                  <span className="ml-1 text-primary decoration-2 hover:underline font-medium">
                    Login here
                  </span>
                </Link>
              </p>
            </div>

            <div className="mt-5">
              {/* <GoogleAuth /> */}

              <SignupForm />
            </div>
          </div>
        </div>
      </main>
    </Baselayout>
  );
}

export default Signup;
