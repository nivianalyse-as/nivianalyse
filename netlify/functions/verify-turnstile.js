exports.handler = async function (event) {
  try {
    const body = JSON.parse(event.body || "{}");
    const token = body["cf-turnstile-response"];

    if (!token) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing Turnstile token" }),
      };
    }

    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.TURNSTILE_SECRET}&response=${token}`,
      }
    );

    const data = await response.json();

    if (!data.success) {
      return {
        statusCode: 403,
        body: JSON.stringify({ error: "Turnstile verification failed" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error" }),
    };
  }
};
