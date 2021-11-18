import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';

class AuthService {
  //내일 이어서 할 것 : 클래스 완성 깃허브 로그인까지 구현
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleAuthProvider = new GoogleAuthProvider();
    this.githubAuthProvider = new GithubAuthProvider();
  }
  login(providerName) {
    const provider = this.getProvider(providerName);
    return signInWithPopup(this.firebaseAuth, provider);
    // 에러 관리 필요 : google,githun에서 동일한 이메일 주소를 사용하는 경우
    // https://stackoverflow.com/questions/44015751/firebase-js-api-auth-account-exists-with-different-credential

    /*    try {
      const result = await signInWithPopup(this.auth, provider);
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
    */
  }
  onAuthChange(onUserChanged) {
    //https://firebase.google.com/docs/auth/web/start
    onAuthStateChanged(this.firebaseAuth, (user) => {
      onUserChanged(user);
    });
  }
  logout() {
    return signOut(this.firebaseAuth);
  }
  getProvider(providerName) {
    switch (providerName) {
      case 'google':
        return this.googleAuthProvider;
      case 'github':
        return this.githubAuthProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
