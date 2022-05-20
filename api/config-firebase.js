//firebase BEG
const {getFirestore} = require("firebase-admin/firestore");
const admin = require("firebase-admin");

const serviceAccount = require("../minutes2code-firebase-adminsdk-z51qw-ff782543bf.json");
const { getApp } = require("firebase-admin/app");

const defaultApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const firestore = getFirestore(defaultApp);

module.exports = firestore;
//firbase END