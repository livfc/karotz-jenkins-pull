include("util.js");
include("config.js");
include("jenkins.js");

var onKarotzConnect = function(data) {
  karotz.button.addListener(function(event) {
    if (event === "DOUBLE") exit();
    return true;
  });

  if (config.failureMode === "retry") retryMode(null);
  else exitMode();
}

var report = function(state, callback) {
  log("reporting " + state);
  var message = config[state + "Message"];
  var color = config[state + "Color"];
  var ears = config[state + "Ears"];

  karotz.led.light(color);
  var onAllActionsFinished = multiCallback(2, ["TERMINATED", "CANCELLED"], callback);
  karotz.ears.move(ears, ears, onAllActionsFinished);
  karotz.tts.start(message, config.language, onAllActionsFinished);
}

var retryMode = function(previousState) {
  var state = jenkinsState(config.jenkins_view_url);
  log(previousState + " => " + state);
  if (!previousState && state === "success")
    exit();
  else
    report(state, function() {
      if (state === 'success') exit();
      else setTimeout(config.retryInterval * 1000, function() { retryMode(state) });
    });
}

var exitMode = function() {
  var state = jenkinsState(config.jenkins_view_url);
  report(state, function() {
    exit();
  });
}

karotz.connectAndStart(karotz_ip, 9123, onKarotzConnect, {});
