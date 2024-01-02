const BASE_URL = "http://localhost:8080";

export function fetchList() {
  return fetch(`${BASE_URL}/`).then((response) => response.json());
}
