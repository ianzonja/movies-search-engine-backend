import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from 'ormconfig';
import { User } from './entities/user.entity';
import { AuthModule } from './modules/auth/auth.module';
import { SearchModule } from './modules/search/search/search.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([User]),
    AuthModule,
    SearchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
