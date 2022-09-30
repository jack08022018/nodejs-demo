import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { join } from 'path';
import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// https://progressivecoder.com/one-stop-guide-to-nestjs-config-environment-variables/

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
        load: [() => {
            const YAML_CONFIG = `properties.${process.env.NODE_ENV}.yaml`;
            return load(
                readFileSync(join(__dirname, YAML_CONFIG), 'utf8'),
            )as Record<string, any>
        }],
        isGlobal: true,
        cache: true,
    })
  ],
  exports: [YamlModule],
})
export class YamlModule {}