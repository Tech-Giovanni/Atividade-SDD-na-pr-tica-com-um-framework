const API_URL = 'http://localhost:3001/livros'

async function request(url, options) {
  let response

  try {
    response = await fetch(url, options)
  } catch {
    throw new Error(
      'Não foi possível conectar à API de livros. Verifique se o JSON Server está rodando.'
    )
  }

  if (!response.ok) {
    throw new Error(
      `A API de livros respondeu com erro (${response.status}). Tente novamente.`
    )
  }

  try {
    return await response.json()
  } catch {
    throw new Error('A API de livros retornou uma resposta inválida.')
  }
}

export function getBooks() {
  return request(API_URL)
}

export function createBook(book) {
  return request(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  })
}
