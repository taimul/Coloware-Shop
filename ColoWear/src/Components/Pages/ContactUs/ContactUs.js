import React from "react";

const ContactUs = () => {
  return (
    <div>
      <section className="bg-gray-100">
        <div className="relative container mx-auto lg:p-20 p-5">
          <img
            className="w-full h-80 object-cover filter blur-sm"
            src="https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg?w=1380&t=st=1680945479~exp=1680946079~hmac=3c421789e8f827ecd34f2625617baea06dfa0c23d9a01f280fdb7fdcca18a680"
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Contact Us
            </h1>
            <p>keep in touch with us</p>
          </div>
        </div>

        <div className="px-4 mx-auto max-w-screen-md lg:p-10">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
            Let's Connect
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-900 sm:text-xl">
            <span className="font-bold">COLO</span>
            <span className="text-red-500 font-bold">WEAR</span> create a unique
            online shopping experience for customers. Also provide you
            high-quality images and videos to showcase products, and may also
            offer virtual try-on tools or other interactive features.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-black"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@expample.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-black"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-black"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button className="btn-warning">Contact US</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
