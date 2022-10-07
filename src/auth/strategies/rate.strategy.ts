import { HttpException, Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-custom'

import { HitService } from '../repository/hit.service'

@Injectable()
export class RateStrategy extends PassportStrategy(Strategy, 'rate') {
  constructor(private readonly hitService: HitService) {
    super()
  }

  validate(request: any): true | never {
    const now = Date.now()
    const last = this.hitService.getLastTime(request.ip)
    this.hitService.record(request.ip, now)
    if (isNaN(last)) {
      return true
    }
    const until = last + request.limit
    if (now < until) {
      throw new HttpException('Too many requests', 429)
    }
    return true
  }
}
