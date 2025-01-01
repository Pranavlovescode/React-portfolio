import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sgEmail from '@sendgrid/mail';


dotenv.config();

const app = express();
const port = 5000;

// Middleware
app.use(cors({ origin: process.env.FRONTEND })); // Allow requests from your frontend
app.use(express.json()); // Parse JSON body

// Set SendGrid API key
sgEmail.setApiKey(process.env.SENDGRID_API_KEY);

// Contact form route
app.post('/email', async (req, res) => {
    try {
        const { email, name, message } = req.body;

        // Compose the email
        const msg1 = {
            to: "pranavtitambe04@gmail.com", // Your email address
            from: "pr.flexyourskills@pranavtitambe.in", // Verified sender email
            replyTo: email, // User's email as reply-to
            subject: `New Collaboration Request from ${name}`,
            text: `Message from ${name} (${email}):\n\n${message}`,
        };

        // Send the email
        await sgEmail.send(msg1);

        const msg2={
            to:email,
            from:"pr.flexyourskills@pranavtitambe.in",
            subject:"Hold up !!, Your Message is sent successfully",
            text:"Developer will respond to your email in upcomming 4 to 5 working days. Till then hold on !!.\n\nRegards\nPR Team (Flex Your Skills)"
        }
        
        await sgEmail.send(msg2);

        console.log("Email sent successfully");
        res.status(200).json({ message: "Your message has been sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error.response?.body?.errors || error.message);
        res.status(500).json({ message: "Failed to send the email. Please try again later." });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
