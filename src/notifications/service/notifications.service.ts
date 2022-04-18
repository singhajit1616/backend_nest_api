import { Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { RabbitmqNotificationExchangeDTO, RabbitmqNotificationMessageDTO } from '../dto/notification-request-body.dto';

@Injectable()
export class NotificationsService {

  
    constructor(
        private readonly amqpConnection: AmqpConnection
    ) { }


    RabbitmqAssertExchange(exchange: RabbitmqNotificationExchangeDTO) {
        this.amqpConnection.channel.assertExchange(exchange.name, exchange.type, exchange.options);
    }

    RabbitmqPublish(Body: RabbitmqNotificationMessageDTO) {
        this.amqpConnection.publish(Body.exchange.name, Body.routingKey, Body.metaData , Body.options)
    }

    RabbitmqPublishToExchange(Body: RabbitmqNotificationMessageDTO) {
        this.RabbitmqAssertExchange(Body.exchange);
        this.RabbitmqPublish(Body);
    }

   
}
