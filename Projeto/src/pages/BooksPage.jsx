import { useState, useEffect } from 'react'
import { getBooks, createBook } from '../api/bookService'
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import './BooksPage.css'

function BooksPage() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingError, setLoadingError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function loadBooks() {
    setLoading(true)
    setLoadingError('')
    try {
      const data = await getBooks()
      setBooks(data)
    } catch (error) {
      setLoadingError(
        error instanceof Error && error.message
          ? error.message
          : 'Não foi possível carregar o acervo de livros.'
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadBooks()
  }, [])

  async function handleCreateBook(bookData) {
    setIsSubmitting(true)
    try {
      const newBook = await createBook(bookData)
      setBooks((currentBooks) => [...currentBooks, newBook])
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="books-page">
      <header className="books-page__header">
        <h1 className="books-page__title">Gerenciamento de Livros</h1>
        <p className="books-page__subtitle">
          Consulte o acervo da biblioteca ou cadastre novos títulos.
        </p>
      </header>

      {loadingError && (
        <div className="books-page__error-banner" role="alert">
          <p className="books-page__error-message">{loadingError}</p>
          <button
            type="button"
            className="books-page__retry-button"
            onClick={loadBooks}
          >
            Tentar novamente
          </button>
        </div>
      )}

      <div className="books-page__content">
        <aside className="books-page__sidebar">
          <BookForm onSubmit={handleCreateBook} isSubmitting={isSubmitting} />
        </aside>

        <section className="books-page__main">
          {loading ? (
            <div className="books-page__loading" aria-live="polite">
              <p>Carregando acervo...</p>
            </div>
          ) : (
            <BookList books={books} />
          )}
        </section>
      </div>
    </main>
  )
}

export default BooksPage
