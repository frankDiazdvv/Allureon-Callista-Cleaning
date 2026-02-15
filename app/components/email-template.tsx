import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  service: string;
  zip: string;
  sqFootage: string;
  message: string;
}

export function EmailTemplate({
  name,
  email,
  phone,
  service,
  zip,
  sqFootage,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h2>New Contact From Website / Contacto Nuevo Desde Sitio</h2>

      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Facility Type:</strong> {service}</p>
      <p><strong>ZIP:</strong> {zip}</p>
      <p><strong>Square Footage:</strong> {sqFootage} sq. ft.</p>

      <hr />

      <p><strong>Message:</strong></p>
      <p>{message}</p>
    </div>
  );
}
