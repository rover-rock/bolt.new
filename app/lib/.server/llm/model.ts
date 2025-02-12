import { createAnthropic } from '@ai-sdk/anthropic';
import { createOpenAI, openai } from '@ai-sdk/openai'

export function getAnthropicModel() {
  const anthropic = createAnthropic({
    baseURL: 'https://trip-llm.alibaba-inc.com/api/openai/v1',
    apiKey: 'fai-2-163-546f74c8f3ea'
  });
  return anthropic('claude-3-5-sonnet-20240620');
}
// 都使用openai格式的请求
export function getOpenaiModel() {
  const createModel = createOpenAI({
    baseURL: 'https://trip-llm.alibaba-inc.com/api/openai/v1',
    apiKey: 'fai-2-163-546f74c8f3ea'
  })
  return  createModel('claude-3-5-sonnet-20240620', {});
}
