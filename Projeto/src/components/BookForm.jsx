import { useId, useRef, useState } from 'react'
import './BookForm.css'

const INITIAL_VALUES = {
  titulo: '',
  autor: '',
  status: '',
}

const STATUS_OPTIONS = [
  { value: 'disponivel', label: 'Disponível' },
  { value: 'emprestado', label: 'Emprestado' },
]

const VALID_STATUS = STATUS_OPTIONS.map((option) => option.value)
const MAX_TITULO_LENGTH = 120
const MAX_AUTOR_LENGTH = 80

function validateField(name, values) {
  const value = values[name].trim()

  if (name === 'titulo') {
    if (!value) return 'Informe o título do livro.'
    if (value.length < 2) return 'O título deve ter pelo menos 2 caracteres.'
    if (value.length > MAX_TITULO_LENGTH) {
      return `O título deve ter no máximo ${MAX_TITULO_LENGTH} caracteres.`
    }
    return ''
  }

  if (name === 'autor') {
    if (!value) return 'Informe o autor do livro.'
    if (value.length < 2) return 'O autor deve ter pelo menos 2 caracteres.'
    if (value.length > MAX_AUTOR_LENGTH) {
      return `O autor deve ter no máximo ${MAX_AUTOR_LENGTH} caracteres.`
    }
    return ''
  }

  if (name === 'status') {
    if (!value) return 'Selecione o status do livro.'
    if (!VALID_STATUS.includes(value)) return 'Selecione um status válido.'
    return ''
  }

  return ''
}

function validate(values) {
  return {
    titulo: validateField('titulo', values),
    autor: validateField('autor', values),
    status: validateField('status', values),
  }
}

function BookForm({ onSubmit, isSubmitting = false }) {
  const formId = useId()
  const formRef = useRef(null)
  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const busy = submitting || isSubmitting

  const fieldId = (name) => `${formId}-${name}`
  const errorId = (name) => `${formId}-${name}-error`

  function handleChange(event) {
    const { name, value } = event.target
    const nextValues = { ...values, [name]: value }

    setValues(nextValues)
    setSubmitError('')

    if (touched[name]) {
      setErrors((current) => ({
        ...current,
        [name]: validateField(name, nextValues),
      }))
    }
  }

  function handleBlur(event) {
    const { name } = event.target

    setTouched((current) => ({ ...current, [name]: true }))
    setErrors((current) => ({
      ...current,
      [name]: validateField(name, values),
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = validate(values)
    const hasErrors = Object.values(nextErrors).some(Boolean)

    setErrors(nextErrors)
    setTouched({ titulo: true, autor: true, status: true })
    setSubmitError('')

    if (hasErrors) {
      const firstInvalidField = Object.keys(nextErrors).find(
        (name) => nextErrors[name]
      )

      formRef.current
        ?.querySelector(`[name="${firstInvalidField}"]`)
        ?.focus()
      return
    }

    if (!onSubmit) return

    const payload = {
      titulo: values.titulo.trim(),
      autor: values.autor.trim(),
      status: values.status,
    }

    setSubmitting(true)

    try {
      await onSubmit(payload)
      setValues(INITIAL_VALUES)
      setErrors({})
      setTouched({})
    } catch (error) {
      setSubmitError(
        error instanceof Error && error.message
          ? error.message
          : 'Não foi possível cadastrar o livro. Tente novamente.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  function renderError(name) {
    if (!errors[name]) return null

    return (
      <p className="book-form__error" id={errorId(name)} role="alert">
        {errors[name]}
      </p>
    )
  }

  return (
    <form
      ref={formRef}
      className="book-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <fieldset className="book-form__fieldset" disabled={busy}>
        <legend className="book-form__legend">Cadastrar novo livro</legend>

        <div className="book-form__field">
          <label className="book-form__label" htmlFor={fieldId('titulo')}>
            Título
          </label>
          <input
            className="book-form__input"
            id={fieldId('titulo')}
            name="titulo"
            type="text"
            value={values.titulo}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={MAX_TITULO_LENGTH}
            autoComplete="off"
            placeholder="Ex.: Dom Casmurro"
            aria-invalid={Boolean(errors.titulo)}
            aria-describedby={errors.titulo ? errorId('titulo') : undefined}
          />
          {renderError('titulo')}
        </div>

        <div className="book-form__field">
          <label className="book-form__label" htmlFor={fieldId('autor')}>
            Autor
          </label>
          <input
            className="book-form__input"
            id={fieldId('autor')}
            name="autor"
            type="text"
            value={values.autor}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={MAX_AUTOR_LENGTH}
            autoComplete="off"
            placeholder="Ex.: Machado de Assis"
            aria-invalid={Boolean(errors.autor)}
            aria-describedby={errors.autor ? errorId('autor') : undefined}
          />
          {renderError('autor')}
        </div>

        <div className="book-form__field">
          <label className="book-form__label" htmlFor={fieldId('status')}>
            Status
          </label>
          <select
            className="book-form__input"
            id={fieldId('status')}
            name="status"
            value={values.status}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(errors.status)}
            aria-describedby={errors.status ? errorId('status') : undefined}
          >
            <option value="">Selecione um status</option>
            {STATUS_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {renderError('status')}
        </div>

        {submitError && (
          <p className="book-form__submit-error" role="alert">
            {submitError}
          </p>
        )}

        <button className="book-form__submit" type="submit" disabled={busy}>
          {busy ? 'Cadastrando...' : 'Cadastrar livro'}
        </button>
      </fieldset>
    </form>
  )
}

export default BookForm
