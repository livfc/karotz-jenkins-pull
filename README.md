# [Karotz](http://www.karotz.com) <- [Jenkins](http://jenkins-ci.org/) pull notifications

This application runs on the Karotz, and polls the Jenkins JSON API at regular intervals.

It's still in an experimental phase, but you can build it and install it as a private application. I will eventually publish it on the Karotz store.

## But there is already a [Jenkins Karotz plugin](https://wiki.jenkins-ci.org/display/JENKINS/Karotz+Plugin)!

I know :-) That plugin in itself is fine, but it relies on the Karotz REST API, which is not reliable right now (502 errors anyone?).

This application takes the opposite approach: pull from the Karotz instead of pushing from Jenkins. It does not rely on any third-party website. In fact, the Karotz can even poll a local URL if it's on the same subnetwork as Jenkins.
