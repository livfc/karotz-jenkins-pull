# [Karotz](http://www.karotz.com) <- [Jenkins](http://jenkins-ci.org/) pull notifications

This is an alternative to the [Jenkins Karotz plugin](https://wiki.jenkins-ci.org/display/JENKINS/Karotz+Plugin), which pushes notifications to the Karotz. The plugin in itself is fine, but it relies on the Karotz REST API, which doesn't seem very stable right now.

This project takes the opposite approach: deploy an application on the Karotz, that polls the Jenkins JSON API at regular intervals.

The app is not yet available on the Karotz store.
