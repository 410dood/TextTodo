exports = function (recipient, code) {
    const twilio = context.services.get("tw1");
    const ourNumber = context.values.get("ourNumber");

    twilio.send({
        from: ourNumber,
        to: recipient,
        body: `Your confirmation code is ${code}.`
    });
};