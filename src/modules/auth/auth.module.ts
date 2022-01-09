import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import config from 'ormconfig';
import { AuthController } from "src/modules/auth/auth.controller";
import { User } from "src/entities/user.entity";
import { AuthService } from "./auth.service";

@Module({
    imports: [
      /* ConfigModule.forRoot({
        envFilePath: '.env',
        isGlobal: true,
      }), */
      TypeOrmModule.forRoot(config),
      TypeOrmModule.forFeature([User]),
    ],
    controllers: [AuthController],
    providers: [AuthService],
  })
  export class AuthModule {}