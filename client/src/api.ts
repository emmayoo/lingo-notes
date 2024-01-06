const BASE_URL = "http://localhost:8080";

export function fetchList() {
  return fetch(`${BASE_URL}/list`).then((response) => response.json());
}

export function fetchItem(pageId: string) {
  return fetch(`${BASE_URL}/item?id=${pageId}`).then((response) =>
    response.json()
  );
}
