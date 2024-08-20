import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import contact123 from "../../assets/contact1.jpg"
import BusinessIcon from '@mui/icons-material/Business';
import CallIcon from '@mui/icons-material/Call';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import Basedreadcums from '../breadcums/breadcums';

// Validation schema with Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  textarea: Yup.string().required('Required'),
});

// Initial values for the form fields
const initialValues = {
  name: '',
  email: '',
  textarea: '',
};

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <>
            <div className="relative h-72 bg-gray-300 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center  "
        style={{
          backgroundImage: `url(${contact123})`,
        }}

       
        
      > </div>
    </div>
    <div className="text-center items-center flex flex-col " ><Basedreadcums title1={"Home"} title2={"Contact Us"} /></div>

    <section className="bg-white dark:bg-slate-800" id="contact">
  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
    <div className="mb-4">
      <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
    
        <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
         Gorkha Treks
        </p>
      </div>
    </div>
    <div className="flex items-stretch justify-center">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="h-full pr-6 md:mt-32">
          <h2 className="text-xl font-heading mb-4 font-bold"><BusinessIcon className='text-green-600' fontSize='large' /> Our Address</h2>
          <p className="text-lg">1230 Maecenas Street Donec Road</p>
          <p className="text-lg">New York, EEUU</p>

          <h2 className="text-xl font-heading mt-6 font-bold">  <CallIcon className='text-green-600' fontSize='large'/> Contact</h2>
          <p className="text-lg">Mobile: +1 (123) 456-7890</p>
          <p className="text-lg">Mail: tailnext@gmail.com</p>

          <h2 className="text-xl font-heading mt-6 font-bold"> <MapsHomeWorkIcon className='text-green-600' fontSize='large' /> Working hours</h2>
          <p className="text-lg">Monday - Friday: 08:00 - 17:00</p>
          <p className="text-lg">Saturday & Sunday: 08:00 - 12:00</p>
        </div>
        <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
          <h2 className="mb-4 text-2xl font-bold dark:text-white">
            Ready to Get Started?
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form id="contactForm">
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="name" className="pb-1 text-lg uppercase tracking-wider font-semibold">Name</label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-600 text-sm" />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="email" className="pb-1 text-lg uppercase tracking-wider font-semibold">Email</label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email address"
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="textarea" className="pb-1 text-lg uppercase tracking-wider font-semibold">Message</label>
                    <Field
                      as="textarea"
                      id="textarea"
                      name="textarea"
                      cols="30"
                      rows="5"
                      placeholder="Write your message..."
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    />
                    <ErrorMessage name="textarea" component="div" className="text-red-600 text-sm" />
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white px-6 py-3 font-xl rounded-md sm:mb-0 text-lg"
                  >
                    Send Message
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default ContactForm;
