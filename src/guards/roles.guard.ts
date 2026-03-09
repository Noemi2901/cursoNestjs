import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';


@Injectable()
export class RolesGuard implements CanActivate {

canActivate(context:ExecutionContext){

 const request = context.switchToHttp().getRequest()

 const user = request.user

 if(user.rol === 'admin'){
   return true
 }

 throw new ForbiddenException()

}

}