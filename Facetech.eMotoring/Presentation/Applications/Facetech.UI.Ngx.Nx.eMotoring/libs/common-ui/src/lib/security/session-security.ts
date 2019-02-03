export class SessionSecurity {
  public id: string;
  public baseSecuritySessionId: string;
  public baseSessionValue: string;
  public auth_token: string;
  public expires_in: string;

  public constructor(security: any) {
    console.log(JSON.stringify(security));

    this.id = security.id;
    this.baseSecuritySessionId = security.baseSecuritySessionId;
    this.baseSessionValue = security.baseSessionValue;
    this.auth_token = security.auth_token
    this.expires_in = security.expires_in;
  }
}
