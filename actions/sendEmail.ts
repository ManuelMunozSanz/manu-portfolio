"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const emailTo = process.env.NEXT_PUBLIC_EMAIL_TO || "manuelm_98@hotmail.es";

  if (!validateString(senderEmail, 500)) {
    return { error: "Correo electrónico inválido" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Mensaje inválido" };
  }

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: emailTo,
      subject: "OFERTA EMPLEO PORTFOLIO MANUEL",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, { message, senderEmail }),
    });

    return { data };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};
