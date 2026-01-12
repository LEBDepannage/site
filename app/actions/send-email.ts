"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    if (!email || !message) {
        return { success: false, error: "Email et message requis" };
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.verify();
    } catch (error) {
        console.error("Erreur de connexion SMTP:", error);
        return { success: false, error: "Erreur de configuration SMTP" };
    }

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // L'utilisateur veut recevoir le mail
            replyTo: email,
            subject: `Nouveau contact LEB Dépannage: ${firstName} ${lastName} - ${service}`,
            text: `
        Nouvelle demande de contact:
        
        Nom: ${firstName} ${lastName}
        Email: ${email}
        Téléphone: ${phone}
        Service: ${service}
        
        Message:
        ${message}
      `,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2C3A52;">Nouvelle demande de contact</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
            <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Téléphone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Service:</strong> ${service}</p>
          </div>
          <div style="margin-top: 20px;">
            <h3 style="color: #2C3A52;">Message:</h3>
            <p style="white-space: pre-wrap; background-color: #fff; padding: 15px; border: 1px solid #e5e7eb; border-radius: 8px;">${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `,
        });

        return { success: true };
    } catch (error) {
        console.error("Erreur d'envoi d'email:", error);
        return { success: false, error: "Erreur lors de l'envoi de l'email" };
    }
}
