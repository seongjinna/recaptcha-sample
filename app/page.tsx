"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Home: React.FC = () => {
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA.");
      return;
    }
    // Submit form or perform action
    console.log("Form submitted with reCAPTCHA value:", recaptchaValue);
  };

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

  return (
    <div className="flex flex-col gap-2 items-center justify-center p-4">
      <h1 className="font-bold text-2xl">Next.js with Google reCAPTCHA</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <ReCAPTCHA
          sitekey={recaptchaSiteKey}
          onChange={handleRecaptchaChange}
        />
        <button type="submit" className="bg-black text-white rounded-md p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
