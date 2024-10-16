"use client";
import NextUiInput from "./NextUi/NextUiInput";
import { ShineButton } from "@/components/ui/ShineButton";
import NextUiTextarea from "./NextUi/NextUiTextarea";
import { useState } from "react";
// import { postContactForm, postToChamondai } from "@/utils/postForm";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    type: "Contact",
  });

  const postToChamondai = async (formData) => {
    console.log("Form submitted to Chamondai", formData);
    try {
      const response = await fetch(
        "/api/v1/form-submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      const res = await response.json();
      if (response.ok) {
        console.log("Submitted to chamondai successfully", res);
        return true;
      } else {
        console.log("Error submitting to chamondai", res);
        alert("Error in submitting");
        return false;
      }
    } catch (error) {
      console.error("Error sumitting to chamondai", error);
      alert("Error in submitting", error);
      return false;
    }
  };

  const handelFormSubmit = async (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    console.log("Form submitted", formData);
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      alert("Please fill all the fields");
      return;
    }

    if (!regex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (await postToChamondai(formData)) {
      alert("Success! Thanks for reaching out. We will get back to you soon.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        type: "Contact",
      }); // Clear the form
      location.reload();
    } else {
      alert("Woops! Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <form onSubmit={handelFormSubmit} className="contact-form w-full">
        <div className="mb-4 flex w-full flex-wrap gap-4 md:flex-nowrap">
          <NextUiInput
            label="First name"
            placeholder="John"
            value={formData.firstName}
            onChange={(e) => {
              setFormData({
                ...formData,
                firstName: e.target.value,
              });
            }}
          />
          <NextUiInput
            label="Last name"
            placeholder="Doe"
            value={formData.lastName}
            onChange={(e) => {
              setFormData({
                ...formData,
                lastName: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-4">
          <NextUiInput
            label="Email"
            placeholder="example@email.com"
            className="text-lg"
            value={formData.email}
            onChange={(e) => {
              setFormData({
                ...formData,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-4">
          <NextUiTextarea
            label="Your message"
            placeholder="Enter your question or message"
            minRows={10}
            value={formData.message}
            onChange={(e) => {
              setFormData({
                ...formData,
                message: e.target.value,
              });
            }}
          />
        </div>
        <ShineButton text="Submit" type={'submit'} />
        {/* <button className="h-[40px] text-[1.6rem]" type="submit">
          Submit
        </button> */}
      </form>
    </>
  );
};

export default ContactForm;
