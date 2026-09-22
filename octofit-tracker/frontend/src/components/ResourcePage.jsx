import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

export default function ResourcePage({ resource, endpoint, eyebrow, title, description, columns, emptyLabel }) {
  const [rows, setRows] = useState([])
  const [state, setState] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    fetchCollection(resource, controller.signal, endpoint)
      .then((items) => { setRows(items); setState('ready') })
      .catch((requestError) => {
        if (requestError.name !== 'AbortError') { setError(requestError.message); setState('error') }
      })
    return () => controller.abort()
  }, [endpoint, resource])

  return <section className="resource-page">
    <div className="resource-heading"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p></div><button type="button" className="primary-button">+ Add {title.slice(0, -1)}</button></div>
    <div className="content-card table-card">
      {state === 'loading' && <div className="empty-state"><span className="loader" />Loading {resource}...</div>}
      {state === 'error' && <div className="empty-state empty-state--error"><strong>Couldn&apos;t reach the API.</strong><span>{error}</span><small>Check that the backend is running on port 8000.</small></div>}
      {state === 'ready' && rows.length === 0 && <div className="empty-state"><span className="empty-icon">◌</span><strong>{emptyLabel || `No ${resource} yet`}</strong><span>Your connected API returned an empty collection.</span></div>}
      {state === 'ready' && rows.length > 0 && <div className="table-responsive"><table className="resource-table"><thead><tr>{columns.map((column) => <th key={column.key}>{column.label}</th>)}</tr></thead><tbody>{rows.map((row, index) => <tr key={row.id || row._id || index}>{columns.map((column) => <td key={column.key}>{column.render ? column.render(row) : row[column.key] ?? '—'}</td>)}</tr>)}</tbody></table></div>}
    </div>
  </section>
}
