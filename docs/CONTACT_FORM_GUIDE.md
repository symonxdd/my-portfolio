# Contact Form Architecture & Guide

This document outlines the mechanics of the portfolio contact form, the integration with **Resend**, and the maintenance/testing workflow.

## 🏗️ How it Works

The email system consists of three primary components:

1.  **Client-Side Form**: `src/components/ui/ContactForm.jsx`
    - Captures the name, email, and message data.
    - Sends a `POST` request to the backend API.
2.  **Server-Side API Route**: `src/app/api/contact/route.js`
    - Functions as the **Next.js API route**.
    - Receives data, generates a **24h timestamp**, and renders the React component into HTML.
    - Utilizes the `resend` library to transmit the final email via Resend servers.
3.  **Email Template Component**: `src/emails/ContactFormEmail.jsx`
    - A **React Email** component defining the email structure.
    - Uses the **Resend-owned `@react-email` library** for compatibility.
    - Features **Inter** typography, **Dark Mode** contrast, and a minimalist vertical layout.

## 🔑 API Keys & Environment Variables

- **Key Management**: API keys are found, created, and managed in the [Resend Dashboard](https://resend.com/api-keys).
- **Environment Configuration**:
    - **Local Development**: The key is stored in `.env.local`. This file is ignored by Git to maintain security.
    - **Production**: Upon deployment (e.g., to Vercel), `RESEND_API_KEY` must be added to the environment variables in the hosting dashboard.
    - **Workflow Tip**: Using a "Development" key for local testing and a "Production" key for the live site is recommended.

## 🧪 Testing Locally (Live Preview)

To view email appearances without sending actual messages, the official React Email CLI can be used:

```bash
npm run email:dev
```
*Tip: This runs `react-email dev -d src/emails`. It opens a local link (usually `localhost:3000`) for monitoring live design changes.*

## 📈 Resend Usage Limits (Free Plan)

Resend provides a free tier for development purposes:

- **Monthly Quota**: 3,000 emails per month.
- **Daily Quota**: 100 emails per day.
- **Email Type**: Classified as "Transactional" (which just means it's an automated email sent immediately in response to a specific action, like a form submission). This tells email providers it's a priority message, not bulk spam or a newsletter, which helps it land in the inbox every time.
- **Support**: Includes 1 custom domain and 1 contact list (technically called an "audience") for managing subscribers.
- **Log History**: Email records and logs are visible in the Resend dashboard for 1 day on the free plan.

---
