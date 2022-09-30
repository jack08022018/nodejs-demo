import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

// https://progressivecoder.com/one-stop-guide-to-nestjs-config-environment-variables/
export default () => {
    const YAML_CONFIG = `properties.${process.env.NODE_ENV}.yaml`;
    return yaml.load(
        readFileSync(join(__dirname, YAML_CONFIG), 'utf8'),
    )as Record<string, any>
}