import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import FirstMeddleware from './middleware/firstMiddleware';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://nicolas11258:0kCg8T4wNf5Ne0zc@cluster0.sy13hmr.mongodb.net/clase_43?retryWrites=true&w=majority`,
    ),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FirstMeddleware).forRoutes({path:'*', method:RequestMethod.ALL})
  }
}

/* Segunda parte
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGO_URL'),
      }),
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
*/