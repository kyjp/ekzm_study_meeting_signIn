import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import { Msg, Jwt } from './interfaces/auth.interface';
export declare class AuthService {
    private readonly prisma;
    private readonly jwt;
    private readonly config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    signUp(dto: AuthDto): Promise<Msg>;
    login(dto: Omit<AuthDto, 'name'>): Promise<Jwt>;
    generateJwt(userId: number, email: string): Promise<Jwt>;
}
