import React from "react";

const Newsletter = () => {
  return (
    <div>
      <section className="bg-base-100 py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="relative flex justify-center items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-success/10 rounded-full border-2 border-dashed border-success flex items-center justify-center relative">
              <div className="w-48 h-48 md:w-60 md:h-60 bg-success rounded-full flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-20 md:w-40 md:h-24 bg-blue-500 rounded-lg shadow-xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute top-[-10px] w-24 h-24 bg-white rounded flex items-center justify-center shadow-md translate-y-4">
                      <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://w3.org"
                          className="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="absolute bottom-0 w-full h-1/2 bg-blue-400 opacity-50 skew-y-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
              Subscribe to our Newsletter!
            </h2>
            <p className="text-base-content/70 mb-8">
              Subscribe to our newsletter and stay updated with the latest news
              and offers.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="form-control">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-info">
                    <svg
                      xmlns="http://w3.org"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="input input-bordered w-full pl-12 focus:outline-info"
                    required
                  />
                </div>
              </div>

              <button className="btn btn-info w-full text-white normal-case text-lg shadow-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
