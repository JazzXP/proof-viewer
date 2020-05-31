import auth0 from "auth0-js";

class Auth {
  private auth0: auth0.WebAuth;
  private expiresAt?: number;
  private idToken?: string;
  private profile: any;

  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: `${process.env.REACT_APP_AUTH0_DOMAIN}`,
      audience: `${process.env.REACT_APP_AUTH0_AUDIENCE}`,
      clientID: `${process.env.REACT_APP_AUTH0_CLIENTID}`,
      redirectUri: `${process.env.REACT_APP_AUTH0_REDIRECT_URI}`,
      responseType: `${process.env.REACT_APP_AUTH0_RESPONSE_TYPE}`,
      scope: `${process.env.REACT_APP_AUTH0_SCOPE}`,
    });

    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  getProfile() {
    return this.profile;
  }

  getIdToken() {
    return this.idToken;
  }

  isAuthenticated() {
    return new Date().getTime() < (this.expiresAt ?? 0);
  }

  signIn() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.idToken = authResult.idToken;
        this.profile = authResult.idTokenPayload;
        // set the time that the id token will expire at
        this.expiresAt = authResult.idTokenPayload.exp * 1000;
        resolve();
      });
    });
  }

  signOut() {
    // clear id token, profile, and expiration
    this.idToken = undefined;
    this.profile = undefined;
    this.expiresAt = undefined;
    this.auth0.logout({
      returnTo: "http://localhost:3000",
      clientID: "sjb1mKujy1lWcHdP5ZOrBaqg7HilPBSV",
    });
  }
}

const auth0Client = new Auth();

export default auth0Client;
