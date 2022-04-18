import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { RouterModule } from 'nest-router';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './common/exception-filters/http-exception.filter';
import { ResponseService } from './common/services/response/response.service';
import { routes } from './routes';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { NotificationsModule } from './notifications/notifications.module';



@Module({
  imports: [
    RouterModule.forRoutes(routes),
    ConfigModule.forRoot(),
    RabbitMQModule.forRootAsync(RabbitMQModule, {
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('RABBIT_MQ_URI')
      })
    }),
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ResponseService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    }
  ],
})
export class AppModule {}
