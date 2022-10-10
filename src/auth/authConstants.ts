import ms from 'ms';

export const AuthConstants = {
  secret : 'secretKey',
  expiresIn: '60m',
  refreshExpiresIn: '1d',
  METADATA_KEY_RATE_LIMIT : 'METADATA_KEY_RATE_LIMIT',
  METADATA_KEY_ROLES : 'METADATA_KEY_ROLES',
};

export const getSecond = (value: string) => {
  return (ms(value))/1000
}