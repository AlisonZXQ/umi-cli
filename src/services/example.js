import request from '../utils/request';

// example
export async function getExample(params) {
  return request('/api/example', { data: params, method: 'POST' });
}
