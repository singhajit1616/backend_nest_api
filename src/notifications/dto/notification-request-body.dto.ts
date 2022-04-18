import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IsArray } from "sequelize-typescript";

export enum NotificationDeviceTypeEnum {
  IOS = 'ios',
  ANDROID = 'android'
}

export class NotificationRequestDTO {
  @ApiProperty({
    required: true
  })
  @IsNotEmpty()
  @IsString()
  job_type: string;
}

export class NotificationInfoDTO {
  @ApiProperty({
    required: true
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    required: true
  })
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty({
    required: true
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    required: true
  })
  @IsNotEmpty()
  @IsString()
  message: string;

  @ApiProperty({
    required: true
  })
  @IsNumber()
  target_id: number;

  @ApiProperty({
    required: true
  })
  @IsNotEmpty()
  @IsString()
  target_identifier: string;

  @ApiProperty({
    required: true
  })
  @IsString()
  target_url: string;

  @ApiProperty({
    required: true
  })
  @IsString()
  target_image: string;

  @ApiProperty({
    required: true
  })
  @IsNumber()
  attach_image: number;

  @ApiProperty({
    required: true
  })
  @IsNumber()
  status: number;

  @ApiProperty({
    required: true
  })
  // @IsArray()
  @ArrayMinSize(1)
  devices: NotificationDeviceTypeEnum[]
}

export class RabbitmqNotificationExchangeDTO {

  @IsNotEmpty()
  @IsString()
  name: string;

  //(type of exchange)
  @IsString()
  type: string;

  // @IsJSON()
  // @IsNotEmptyObject()
  options: Object; //durable
}

//RabbitmqNotificationMessageDto
export class RabbitmqNotificationMessageDTO {
  // @IsJSON()
  @IsNotEmpty()
  metaData: Object;

  @IsNotEmpty()
  exchange: RabbitmqNotificationExchangeDTO;

  @IsNotEmpty()
  @IsString()
  routingKey: string;

  // @IsJSON()
  options: Object;
}




// @ApiProperty()
// @IsArray()
// @IsOptional()
// @ValidateNested({ each: true })
// @ArrayMinSize(1)
// @ArrayMaxSize(therapeuticSize)
// @Type(() => therapeuticParam)
// //therapeutics: therapeuticParam[];