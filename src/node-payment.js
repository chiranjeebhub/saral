var request = require("request");

var headers = {
  "X-Api-Key": "665765ae626408849013693924ca0190",
  "X-Auth-Token": "6ee973c889862894208c634fe76068cb"
};
var payload = {
  purpose: "Payment for Test Booking",
  amount: "2500",
  phone: "9999999999",
  buyer_name: "John Doe",
  redirect_url: "http://www.example.com/redirect/",
  send_email: true,
  webhook: "http://www.example.com/webhook/",
  send_sms: true,
  email: "foo@example.com",
  allow_repeated_payments: false
};

request.post(
  "https://www.instamojo.com/api/1.1/payment-requests/",
  { form: payload, headers: headers },
  function(error, response, body) {
    if (!error && response.statusCode == 201) {
      console.log(body);
    }
  }
);
