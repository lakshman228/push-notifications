importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyDNzK-TGv2GtK6MmQurjGB_xba5_fY7rto",
  authDomain: "web-notifications-8a6a3.firebaseapp.com",
  projectId: "web-notifications-8a6a3",
  storageBucket: "web-notifications-8a6a3.appspot.com",
  messagingSenderId: "1004305289396",
  appId: "1:1004305289396:web:15993cefcdcf3631be07e1",
  measurementId: "G-S1YDQEW6QM"
});

const messaging = firebase.messaging();
