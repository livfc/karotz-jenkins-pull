// Removes the '_anime' suffix if present.
var rawColor = function(color) {
  return color.split("_")[0];
}

var globalState = function(jobs) {
  var globalState, i, color;
  globalState = "success";
  for (i = 0; i < jobs.length; i++) {
    color = rawColor(jobs[i].color);
    if (color == "red") return "failure";
    if (color == "gray") globalState = "unknown";
    if (color == "yellow" && globalState === "success") globalState = "unstable";
  }
  return globalState;
}

var jenkinsState = function(view_url) {
  var json_url = view_url + "/api/json";
  log("Retrieving " + json_url);
  try {
    var raw = http.get(json_url);
    log("Response: " + raw);
    var data = JSON.parse(raw);
    return globalState(data.jobs);
  } catch (err) {
    return "unknown";
  }
}
