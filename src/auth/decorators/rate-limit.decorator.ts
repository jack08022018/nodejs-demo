import { ExecutionContext, SetMetadata } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AuthConstants } from '../authConstants'

export const getRateLimit = (
  context: ExecutionContext,
  reflector: Reflector,
): number | undefined =>
  reflector.get(AuthConstants.METADATA_KEY_RATE_LIMIT, context.getHandler())

export const RateLimit = (milisecond: number) =>
  SetMetadata(AuthConstants.METADATA_KEY_RATE_LIMIT, milisecond)
