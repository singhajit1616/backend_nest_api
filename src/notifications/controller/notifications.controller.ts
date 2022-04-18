import { Body, Controller, Post, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BasicAuthHeaders } from 'src/common/decorators/basic-auth-headers.decorator';
import { RabbitmqNotificationMessageDTO } from '../dto/notification-request-body.dto';

import { NotificationsService } from '../service/notifications.service';


@ApiTags('notifications')
@BasicAuthHeaders()
@Controller('')
export class NotificationsController {

  constructor(
    private NotificationService: NotificationsService
  ) { }

  @Post('')
  async createNotification(@Request() req) {
    try {
      const body = {
        "metaData": {
          "job_type": "notification_info"
        },
        "exchange": {
          "name": "exchange",
          "type": "topic",
          "options": {   
             "durable": true
          }
        },
        "routingKey":"info.823",
        "options": {}
      }
      this.NotificationService.RabbitmqPublishToExchange(body);
      console.log(body)
      console.log('Success');
    } catch (error) {
      console.log('error', error)
    }
  }

  
}
