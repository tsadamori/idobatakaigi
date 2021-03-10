import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBKBXmeESTqPsxut6VupbRjSf_546lNKNE",
    authDomain: "idobatakaigi-with-ham-8ee64.firebaseapp.com",
    projectId: "idobatakaigi-with-ham-8ee64",
    storageBucket: "idobatakaigi-with-ham-8ee64.appspot.com",
    messagingSenderId: "158670333266",
    appId: "1:158670333266:web:cb2ca1acf8401e80a6c68b"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const messageRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
    messageRef.push({ name, text });
};