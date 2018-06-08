var Config = {
  // Contents of this file will be send to the client
  "domain":     process.env.OPENSHIFT_APP_DNS || 'http://socketio-openshift-socketio-openshift.7e14.starter-us-west-2.openshiftapps.com/',

  "serverip":   process.env.OPENSHIFT_NODEJS_IP || 'http://socketio-openshift-socketio-openshift.7e14.starter-us-west-2.openshiftapps.com/',
  "serverport": process.env.OPENSHIFT_NODEJS_PORT || '8080',
  
  "clientport": (process.env.OPENSHIFT_NODEJS_PORT) ? '8000':'8080',
  "protocol":   'ws://',

  "heartbeattmo": 1000, // milliseconds 
  
  "wsclientopts": { reconnection: true, 
                    reconnectionDelay: 2000,
                    reconnectionAttempts: 100,
                    secure: false
                  }
};

module.exports = Config;
