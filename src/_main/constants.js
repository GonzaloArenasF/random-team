const values = {};

// Storage
values.STORAGE = {
  KEYS: {
  },
  SOURCE: {
    LOCAL: "localStorage", // Browser
    SESSION: "sessionStorage", // Browser
    DB: "realtime", // Firebase
  },
};

// Notifications
values.NOTIFICATION = {
  TYPE: {
    ALERT: "alert",
    TOAST: "toast",
  },
  SEVERITY: {
    INFO: "info",
    WARNING: "warning",
    ERROR: "error",
  },
  AUTO_REMOVE_AFTER: {
    INFO: 4000,
  },
};

// Auth states
values.AUTH = {
  TYPE: "signInWithEmailAndPassword",
  SIGNED_IN: "AUTH_SIGNED_IN",
  SIGNED_OUT: "AUTH_SIGNED_OUT",
  SIGNED_UP: "AUTH_SIGNED_UP",
  SIGNED_DOWN: "AUTH_SIGNED_DOWN",
  LOGIN_ATTEMPTS: 10,
};

// Firebase
values.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCPwWOrVnWXiAD2wZvw6hXTyW0eFwGKVd0",
  authDomain: "team-manager-3f58a.firebaseapp.com",
  projectId: "team-manager-3f58a",
  storageBucket: "team-manager-3f58a.firebasestorage.app",
  messagingSenderId: "1009575128083",
  appId: "1:1009575128083:web:ef8831c9002a9bc55fa3e6",
  measurementId: "G-DQ4EW5Q7C0"
};

// i18n
values.I18N = {
  DEFAULT: "es",
  SUPPORTED: ["es"],
};

//reCaptcha
values.RECAPTCHA = {
  ACTIONS: {
    
  },
  PROD: {
    ID: "6LfT-qEqAAAAANaqu4NcQb8fWQiqhckbbkvCchRs",
    NAME: "TeamManager-ProdreCAPTCHA",
  },
};

// Environment
values.E = [
  "http://172.20.10.2:8080",
  "team-manager-3f58a.firebaseapp.com",
];

values.APP_NAME = "Team manager";
values.APP_VERSION = "v1.3.0";
values.FIREBASE_AVAILABLE = true;

//  Modify before deploy
export const ENV_URL = values.E[0];

export const CONSTANT = values;