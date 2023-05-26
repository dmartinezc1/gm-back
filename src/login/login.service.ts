import { Injectable,HttpException } from '@nestjs/common';

@Injectable()
export class LoginService {
    private userAdmin="admin";
    private passw="admin";

    public login(login:{user:string;password:string}){
        if(login.user===this.userAdmin && login.password===this.passw){
            return "Ok"
        }
        else{
            throw new HttpException('Usuario invalido',401)
        }
    }
}
