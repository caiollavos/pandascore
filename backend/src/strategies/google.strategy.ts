import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
		console.log('Client ID:', process.env.GOOGLE_CLIENT_ID);  // Adicione esta linha
  	console.log('Client Secret:', process.env.GOOGLE_CLIENT_SECRET);  // Adicione esta linha

    super({
      clientID: process.env.GOOGLE_CLIENT_ID, // Verifique esta linha
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Verifique esta linha
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ['email', 'profile'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    const { name, emails, photos } = profile;
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
    };
    done(null, user);
  }
}