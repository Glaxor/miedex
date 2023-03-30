import * as React from "react";
import CustomButton from "../components/custom_button";
import Layout from "../components/layout";
import PageHero from "../components/page_hero";
import axios from "axios";
import { Link } from "gatsby";
import Seo from "../components/seo";
import classNames from "classnames";

const ContactPage = () => {
  const [serverState, setServerState] = React.useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = async (e) => {
    console.log(e.target.name);
    e.preventDefault();

    const formData = new FormData(e.target);
    const body = {};
    formData.forEach((value, property) => (body[property] = value));
    //here you can update, remove, add values/properties in the body object this is specially usefull if any custom process must be done to check, encrypt data or wherever you want.
    console.table(body);
    setServerState({ submitting: true });
    await axios({
      method: "post",
      url: "https://contactserver-zdvw5gogbq-uc.a.run.app/contact/", //"http://localhost:8080/contact", //
      data: body,
    })
      .then((r) => {
        handleServerResponse(true, "Thanks!", e.target);
      })
      .catch((r) => {
        console.log(r + "error");
        handleServerResponse(false, r.response.data.error, e.target);
      });
  };
  return (
    <Layout pageTitle="Contact us">
      <PageHero
        title={"Contact us"}
        description="Contact us to learn more about how we can help your business
        achieve its goals."
        action={false}
      />
      <section class="text-gray-600 body-font relative ">
        <div class="container px-5 py-8 mx-auto ">
          <div class="w-full">
            <form
              className="lg:p-10 p-2 bg-white rounded-lg  mx-auto lg:w-1/2 w-full space-y-4"
              onSubmit={(e) => handleOnSubmit(e)}
            >
              {/* <!-- Name --> */}
              <div className="flex flex-col">
                <label
                  for="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="peer mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-emerald-300 focus:ring-1 focus:ring-emerald-300
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </div>

              {/* <!-- Email --> */}
              <div className="flex flex-col">
                <label
                  for="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="from"
                  id="from"
                  required
                  className="peer mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-emerald-300 focus:ring-1 focus:ring-emerald-300
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </div>

              {/* <!-- Message --> */}
              <div className="flex flex-col">
                <label
                  for="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="12"
                  required
                  className="peer mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-emerald-300 focus:ring-1 focus:ring-emerald-300
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className={classNames(
                  "inline-flex items-center px-4 py-1 font-semibold leading-6 text-sm shadow rounded-md text-white bg-red-600 hover:bg-red-400 transition ease-in-out duration-150 ",
                  { "cursor-not-allowed": serverState.submitting }
                )}
              >
                {serverState.submitting && (
                  <svg
                    class="animate-spin h-5 w-5 mr-3 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="Contact us" />;

export default ContactPage;
