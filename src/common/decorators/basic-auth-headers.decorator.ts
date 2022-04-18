import { applyDecorators } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';

export function BasicAuthHeaders(...args: string[]) {
  return applyDecorators(
    ApiHeader({
      name: 'udid',
      description: "unique id",
      schema: {
        default: '1234'
      }
    })
  );
}
