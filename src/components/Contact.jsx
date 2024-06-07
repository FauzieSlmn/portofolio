import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = () => {
    const form = useRef();
    const sendEmail = async (e) => {

        await emailjs.sendForm('service_mkqerse', 'template_ocynbl7', form.current, {
        publicKey: 'gb9YwYnkJdfvrvaQO',
      }).then(
        () => {
            Swal.fire({
                title: "Success!",
                text: "Your email has been sent successfully!",
                icon: "success",
                button: "OK",
                timer: 2000
              });
        e.preventDefault();

          console.log('SUCCESS!');
        },
        (error) => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                timer: 2000
              });

          console.log('FAILED...', error.text);
        },
      );
    };
  return (
    <section id="contact" className="p-8 bg-gray-100 to-indigo-600 text-white">
      <div className="max-w-4xl mx-auto bg-white text-black rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
        <form className="space-y-6" ref={form} onSubmit={sendEmail}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" name='user_name' className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name='user_email' className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" name='message' />
          </div>
          <div>
            <button type="submit" className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
