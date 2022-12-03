import { BadRequestException } from '@nestjs/common';

export function handleError(error: Error) {
  throw new BadRequestException({ description: error.message, cause: error });
  return undefined;
}
