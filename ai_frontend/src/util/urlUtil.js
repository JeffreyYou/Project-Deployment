const apiHost = process.env.NEXT_PUBLIC_API_HOST;

function getProtocolAndHost() {
  const urlRegex = /^(https?:)\/\/([^:/]+)(:\d+)?/;
  const match = apiHost?.match(urlRegex);
  if (!match) {
    return '';
  }
  const protocol = match[1];
  const host = match[2];
  const port = match[3];
  return [protocol, host, port];
}

export function getApiServerUrl() {
  return apiHost;
}

export function getWsServerUrl(url) {
  const [protocol, host, port] = getProtocolAndHost(url);

  const ws_scheme = protocol === 'https:' ? 'wss' : 'ws';
  const res = `${ws_scheme}://${host}${port ? `${port}`: ''}`;
  const publicUrl = 'wss://jeffreyyou.com/ai-character'
  return publicUrl;

  // return `wss://${host}${port ? `${port}`: ''}`;
  // return `wss://fissionailab.com`;
  // return `wss://127.0.0.1:8000`;
}
