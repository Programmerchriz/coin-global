'use server';

import qs from 'query-string';

const BASE_URL = process.env.COINGECKO_BASE_URL;
const API_KEY = process.env.COINGECKO_API_KEY;

if (!BASE_URL) throw new Error('Could not get base url');
if (!API_KEY) throw new Error('Could not get api key');

// https://pro-api.coingecko.com/api/v3/coins?id=api-key

export async function fetcher<T>(
  endpoint: string,
  params?: QueryParams,
  revalidate = 60
): Promise<T> {
  const baseUrl = `${BASE_URL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;

  const url = params
    ? `${baseUrl}?${qs.stringify(params, {
        skipEmptyString: true,
        skipNull: true,
      })}`
    : baseUrl;
  console.log(url);

  const response = await fetch(url, {
    headers: {
      'x-cg-demo-api-key': API_KEY,
      'Content-Type': 'application/json',
    } as Record<string, string>,
    next: { revalidate },
  });

  if (!response.ok) {
    const errorBody: CoinGeckoErrorBody = await response.json().catch(() => ({}));

    throw new Error(`API Error: ${response.status} ${errorBody.error || response.statusText}`);
  }

  return response.json();
}
