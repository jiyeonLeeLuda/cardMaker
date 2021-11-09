import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  try {
    const result = await signInWithPopup(auth, provider);
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;

    console.log(credential);
    console.log(token);
    console.log(user);
    return true;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(
      `로그인 실패 | ${email} | ${credential} | ${errorCode} | ${errorMessage}`
    );
    alert(`로그인 실패 | ${errorCode} `);
    return false;
  }

  // const provider = new GoogleAuthProvider();
  // const auth = getAuth();
  // signInWithPopup(auth, provider)
  //   .then((result) => {
  //     console.log('로그인 성공 ', result);
  //     // This gives you a Google Access Token. You can use it to access the Google API.
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     // The signed-in user info.
  //     const user = result.user;

  //     console.log(credential);
  //     console.log(token);
  //     console.log(user);
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;

  //     const email = error.email;
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     console.log(
  //       `로그인 실패 | ${email} | ${credential} | ${errorCode} | ${errorMessage}`
  //     );
  //     alert(`로그인 실패 | ${errorCode} `);
  //     return error;
  //   });
}

function loginWithGithub() {}

export { loginWithGoogle, loginWithGithub };
