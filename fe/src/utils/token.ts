const TOKEN_KEY = '__milestone__token';

export interface Token {
  value: string;
}

export function setToken(token: Token) {
  window.localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
}

export function clearToken() {
  window.localStorage.removeItem(TOKEN_KEY);
}

export function getToken(): Token | null {
  const tokenStr = window.localStorage.getItem(TOKEN_KEY);
  if (!tokenStr) return null;

  const token = JSON.parse(tokenStr) as Token;

  return token;
}
