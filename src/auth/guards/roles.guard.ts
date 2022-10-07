import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'
import { UsersEntity } from '../repository/users.entity'
import { AuthConstants } from '../authConstants'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
      const request = context.switchToHttp().getRequest()
      const user: UsersEntity = this.getCurrentUser(request)
      if (!user) {
          throw new UnauthorizedException()
      }
      const roles = this.getRoles(context, this.reflector)
      if (!roles) return true
      if (!user.roles) return false
      return user.roles.some(role => roles.includes(role))
  }

  private getCurrentUser(request: any): UsersEntity {
      return request.isAuthenticated() ? request.user : undefined
  }

  private getRoles(context: ExecutionContext, reflector: Reflector ): string[] | undefined {
      return reflector.get(AuthConstants.METADATA_KEY_ROLES, context.getHandler())
  }

}
