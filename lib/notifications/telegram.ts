const TELEGRAM_API = "https://api.telegram.org";

export async function sendTelegramNotification({
  name,
  phone,
  email,
  service,
  message,
}: {
  name: string;
  phone: string;
  email?: string;
  service: string;
  message: string;
}) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn("Telegram environment variables are missing.");
    return;
  }

  const text = `
🔔 New Enquiry

👤 Name: ${name}

📞 Phone: ${phone}

📧 Email: ${email || "Not Provided"}

🛠 Service: ${service}

💬 Message:
${message}

🕒 ${new Date().toLocaleString("en-IN")}
`;

  try {
    await fetch(
      `${TELEGRAM_API}/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
      }
    );
  } catch (error) {
    console.error("Telegram notification failed:", error);
  }
}