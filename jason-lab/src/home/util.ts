import UAParser from 'ua-parser-js';

const ua = new UAParser();

export function isMobile() {
  const { type } = ua.getDevice();
  return type === 'mobile';
}
