karotz.connectAndStart = function(host, port, callback, data) {
  try {
    karotz.connect(host, port);
    log("connected");
    karotz.start(callback, data);
  } catch (err) {
    log(err);
  }
};

var multiCallback = function(expectedRequests, allowedEvents, realCallback) {
  var receivedRequests = 0;
  return function(event) {
    if (allowedEvents.indexOf(event) > -1) {
      receivedRequests += 1;
      log("multiCallback invoked " + receivedRequests + "/" + expectedRequests + " time(s)")
      if (receivedRequests == expectedRequests) realCallback(event);
    }
  };
};
