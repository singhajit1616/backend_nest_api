import { IsJSON, isNotEmpty, IsNotEmpty, IsString } from "class-validator";

//move to notification_request_body_dto file
//set names for DTO 
//RabbitmqNotificationExchangeDTO
export class RabbitmqNotificationExchangeDTO{

    @IsNotEmpty()
    @IsString()
    name:string;

    //(type of exchange)
    @IsString()
    type:string

    // @IsJSON()
    // @IsNotEmptyObject()
    options:JSON; //durable
}

//RabbitmqNotificationMessageDto
export class RabbitmqNotificationMessageDTO
{
    // @IsJSON()
    @IsNotEmpty()
    metaData:JSON;

    @IsNotEmpty()
    exchange:RabbitmqNotificationExchangeDTO;

    @IsNotEmpty()
    @IsString()
    routingKey:string;

    // @IsJSON()
    options:JSON;
}


