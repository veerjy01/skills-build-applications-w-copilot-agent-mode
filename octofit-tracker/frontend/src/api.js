const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

export function apiUrl(resource) {
  return `${apiBaseUrl}/${resource}/`
}

export function collectionFromResponse(payload) {
  if (Array.isArray(payload)) return payload
  if (!payload || typeof payload !== 'object') return []
  if (Array.isArray(payload.results)) return payload.results
  if (Array.isArray(payload.items)) return payload.items
  if (Array.isArray(payload.data)) return payload.data
  if (Array.isArray(payload.documents)) return payload.documents
  return []
}

export async function fetchCollection(resource, signal, endpoint = apiUrl(resource)) {
  const response = await fetch(endpoint, { signal })
  if (!response.ok) throw new Error(`Unable to load ${resource} (${response.status})`)
  return collectionFromResponse(await response.json())
}
