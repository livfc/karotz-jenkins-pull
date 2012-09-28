var karotz_ip, config;

if (typeof instanceName !== 'undefined') { // Production
  karotz_ip = "localhost";
  config = params[instanceName];

} else { // Dev environment
  karotz_ip = "192.168.31.23";

  config = {};
  config.jenkins_view_url = "http://192.168.0.26:8080/javadoc";
  config.language = "en";

  config.successMessage = "<prosody pitch='300Hz' rate='x-slow'><voice emotion='crossed'>weepee</voice></prosody>";
  config.successColor = "00FF00";
  config.successEars = 0;

  config.unstableMessage ="<prosody pitch='300Hz' rate='x-slow'>o oh</prosody>";
  config.unstableColor = "FFFF00";
  config.unstableEars = 5;

  config.failureMessage = "<prosody pitch='300Hz' rate='x-slow'>oh no</prosody>";
  config.failureColor = "FF0000";
  config.failureEars = 8;

  config.unknownMessage = "<prosody pitch='300Hz' rate='x-slow'>huh</prosody>";
  config.unknownColor = "FF00FF";
  config.unknownEars = 8;

  config.failureMode = "retry";
  config.retryInterval = 5;
}
