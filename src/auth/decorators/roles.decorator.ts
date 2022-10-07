import { ExecutionContext, SetMetadata } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AuthConstants } from '../authConstants'

export const getRoles = (
  context: ExecutionContext,
  reflector: Reflector,
): string[] | undefined =>
  reflector.get(AuthConstants.METADATA_KEY_ROLES, context.getHandler())

export const Roles = (...roles: string[]) =>
  SetMetadata(AuthConstants.METADATA_KEY_ROLES, roles)
