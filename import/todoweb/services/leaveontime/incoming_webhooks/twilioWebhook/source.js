/*
  See https://www.twilio.com/docs/api/twiml/sms/twilio_request for
  an example of a payload that Twilio would send.

  Try running in the console below.
*/
//
// exports = function(args) {
//   const db = context.services.get("mongodb-atlas").db("todo");
//   const users = db.collection("users");
//   const items = db.collection("items");
//
//   users.findOne({ phone_number: args.From }).then(user => {
//     const todo = { "text": args.Body, "owner_id": user._id };
//     return items.insertOne(todo);
//   });
// };

exports = function(args) {
    const db = context.services.get("mongodb-atlas").db("todo");
    const users = db.collection("users");
    const items = db.collection("items");

    users.findOne({ phone_number: args.From }).then(user => {
        const todo = { "text": args.Body, "owner_id": user._id };
        return items.insertOne(todo);
    });
};