const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AU6MvSEjV6aKr6gjljtJBsMhLy2yBpBsy3ohyQkOadjhaMgN-_V1gRW-wXKF6C7JICuYNK3i8wvCUIxa",
  client_secret: "EMOffTeGFr_bOf0aQVMt0YSE5WDcY8On4H_Rtd4Bv7fGAuG8-ReFFiP1kJpbj2RfAcNTKb_sW25sCBlt",
});

module.exports = paypal;
