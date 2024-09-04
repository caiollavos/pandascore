import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '@services/auth/auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    return await console.log(req)
    // Inicia o redirecionamento para o Google
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res: Response) {
    try {
      // Aqui você pode usar o serviço de autenticação para lidar com o callback
      const user = await this.authService.handleGoogleCallback(req);

      // Redirecionar para a homepage após o login bem-sucedido
      console.log('Login bem-sucedido!', user);
      res.redirect('/home');
    } catch (error) {
      // Lidar com erros e redirecionar para uma página de erro, se necessário
      console.log(error);
      res.redirect('/error');
    }
  }
}