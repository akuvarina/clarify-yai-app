async function sendEmail(emailData) {
    const body = getEmailBody(emailData);
    await Email.send({
        SecureToken : "2beb9b67-7b08-428a-a3bf-c16c89e40234",
        To: 'info@clarifyy.ai',
        From: "clarify.yai@gmail.com",
        Subject: "ClarifyY.ai: a new demo request",
        Body: body,
    })
        .then((message) => console.log('ok', message))
        .catch((err) => console.log(err))
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
