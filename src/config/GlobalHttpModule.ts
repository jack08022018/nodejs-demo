import { HttpModule } from '@nestjs/axios';
import { Module, Global } from '@nestjs/common';

@Global()
@Module({
  imports: [
    HttpModule.registerAsync({
        useFactory: () => ({
          timeout: 5000,
          maxRedirects: 5,
        }),
    })
  ],
  exports: [HttpModule],
})
export class GlobalHttpModule {}