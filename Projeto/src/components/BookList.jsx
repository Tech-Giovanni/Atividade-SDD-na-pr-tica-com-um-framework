import { useId } from 'react'
import './BookList.css'

const STATUS_LABELS = {
  disponivel: 'Disponível',
  emprestado: 'Emprestado',
}

function getStatusInfo(status) {
  if (STATUS_LABELS[status]) {
    return {
      label: STATUS_LABELS[status],
      modifier: `book-list__status--${status}`,
    }
  }

  return {
    label: status || 'Não informado',
    modifier: 'book-list__status--desconhecido',
  }
}

function BookList({ books = [] }) {
  const titleId = useId()
  const total = books.length
  const totalLabel = total === 1 ? '1 livro' : `${total} livros`

  return (
    <section className="book-list" aria-labelledby={titleId}>
      <header className="book-list__header">
        <h2 className="book-list__title" id={titleId}>
          Acervo
        </h2>
        <p className="book-list__count">{totalLabel}</p>
      </header>

      {total === 0 ? (
        <p className="book-list__empty">
          Nenhum livro cadastrado no acervo ainda.
        </p>
      ) : (
        <ul className="book-list__items">
          {books.map((book) => {
            const status = getStatusInfo(book.status)

            return (
              <li className="book-list__item" key={book.id}>
                <div className="book-list__info">
                  <h3 className="book-list__book-title">{book.titulo}</h3>
                  <p className="book-list__author">{book.autor}</p>
                </div>

                <span
                  className={`book-list__status ${status.modifier}`}
                  aria-label={`Status: ${status.label}`}
                >
                  {status.label}
                </span>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}

export default BookList
