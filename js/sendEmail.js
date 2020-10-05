async function sendEmail(emailData) {
    const body =getEmailBody(emailData);
    await Email.send({
        Host: "smtp.elasticemail.com",
        Username: "info@clarifyy.ai",
        Password: "95E37398A9A5367626464E836BF59599159B",
        To: 'clarify.yai@gmail.com',
        From: "clarify.yai@gmail.com",
        Subject: "ClarifyY.ai: a new demo request",
        Body: body,
    })
}

function getEmailBody(emailData) {
    return `<p><b>Email:</b> ${emailData.email}</p>
<p><b>First name:</b> ${emailData.firstName}</p>
<p><b>Last name:</b> ${emailData.lastName}</p>
<p><b>Job title:</b> ${emailData.job}</p>
<p><b>Company name:</b> ${emailData.company}</p>
<p><b>Phone:</b> ${emailData.phone}</p>
<p><b>Comments:</b> ${emailData.comments}</p>`;
}
