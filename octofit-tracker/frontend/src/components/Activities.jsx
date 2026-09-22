import ResourcePage from './ResourcePage.jsx'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

export default function Activities() {
  return <ResourcePage resource="activities" endpoint={endpoint} eyebrow="Movement log" title="Activities" description="Track the small wins that build stronger habits." columns={[{ key: 'name', label: 'Activity' }, { key: 'type', label: 'Type' }, { key: 'duration', label: 'Duration' }, { key: 'points', label: 'Points' }]} />
}
