import React from 'react';
import { Formik, Form, Field } from 'formik';
import './styles.css'
import * as Yup from 'yup';
import ReactDOM from 'react-dom';
import ReCAPTCHA from "react-google-recaptcha";

// function onChange(value) {
//     console.log("Captcha value:", value);
//   }
   
  // ReactDOM.render(
  //   <ReCAPTCHA
  //     sitekey="6LelFjUjAAAAAMIVsWflzrq5J43d7voU4BFa_Xqa"
  //     onChange={onChange}
  //   />,
  //   document.body
  // );
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

 const ContactUs = () => (
  <div>
    <h1 className='title' >Contact Us</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        desc: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <div className='Form'>
        <Form >
            <div className='input'>
            <label className='label' htmlFor="firstName">First Name</label>
          <Field className="field" name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
           </div>

            <div className='input'>
           <label className='label' htmlFor="lastName">Last Name</label>
          <Field className="field" name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
           </div>
         <div className='input'>
         <label className='label' htmlFor="email">Email Address</label>
          <Field className="field"  name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
           </div>
         
            <div className='input'>
           <label className='label' htmlFor="age">age  </label>
          <Field className="field" name="age" type="age" />
          {errors.age && touched.age ? <div>{errors.age}</div> : null}
           </div>
         
            <div className='input'>
           <label className='label' htmlFor="desc">desc  </label>
          <Field className="field" name="desc" type="desc" />
          {errors.desc && touched.desc ? <div>{errors.desc}</div> : null}
           </div>
          <button type="submit" className='button'>Submit</button>
        </Form>
        </div>
      )}
    </Formik>
  </div>
);export default ContactUs;