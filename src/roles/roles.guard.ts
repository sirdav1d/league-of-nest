import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { IUser } from 'src/user/entities/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(
    ctx: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = ctx.switchToHttp().getRequest();
    const {role}: IUser = request.user;

    const requiredRole = 'admin';

    if (!role.includes(requiredRole)) {
      throw new UnauthorizedException('Usuário não é administrador');
    }
    return true;
  }
}
