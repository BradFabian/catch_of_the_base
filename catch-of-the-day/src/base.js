import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "",
  authDomain: "catch-of-the-day-brad-fabian-2.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-brad-fabian-2.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());
//named export
export { firebaseApp };
//default export
export default base;
