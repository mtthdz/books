// server functions
export async function getServerData() {
  const response = await fetch('/api/books/all');
  return response.json();
}

export async function postServerData(book) {
  const response = await fetch('/api/books/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ book })
  });
  return response.json();
}