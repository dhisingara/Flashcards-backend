import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectOptions } from 'mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { WordModule } from './word/word.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    UserModule,
    AuthModule,
    WordModule,
    MongooseModule.forRootAsync({
      useFactory: (): MongooseModuleOptions =>
        ({
          uri: process.env.mongoUri,
          useNewUrlParser: true,
          keepAlive: true,
          autoIndex: false,
          autoCreate: false,
          useUnifiedTopology: true,
        } as ConnectOptions),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
