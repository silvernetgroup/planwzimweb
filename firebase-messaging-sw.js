importScripts("https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js");
var firebaseConfig = {
  apiKey: "AIzaSyA2bkVQEB3hF8f9QWlPFOSVcg87dHzMxrI",
  authDomain: "silvertimetable-bea41.firebaseapp.com",
  databaseURL: "https://silvertimetable-bea41.firebaseio.com",
  projectId: "silvertimetable-bea41",
  storageBucket: "silvertimetable-bea41.appspot.com",
  messagingSenderId: "494093391066",
  appId: "1:494093391066:web:1be29c4e97bd07e1e201e3",
  measurementId: "G-Y6MSRR5Z0Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const msg = firebase.messaging();
msg.setBackgroundMessageHandler(function(payload) {
  const title = "Plan WZIM";
  const options = {
    body: payload.data,
  };
  return self.registration.showNotification(title,options);
})