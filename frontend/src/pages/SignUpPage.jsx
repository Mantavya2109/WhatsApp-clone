import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore.js";

const SignUpPage = () => {
  const { showPassword, setShowPassword } = useState(false);
  const { formData, setFormData } = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="min-h-screen grid lg:grid-cols-2">
        {/* left side */}
        <div className="flex flex-col justify-center items-center p-6 sm:p-12"></div>
        <div className="w-full max-w-md space-y-8"></div>
      </div>
    </div>
  );
};

export default SignUpPage;
