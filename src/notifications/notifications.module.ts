import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { NotificationsController } from './controller/notifications.controller';
import { NotificationsService } from './service/notifications.service';

@Module({
  imports: [],
  controllers: [NotificationsController],
  providers: [AmqpConnection, NotificationsService]
})
export class NotificationsModule {}
