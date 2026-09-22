import ResourcePage from './ResourcePage.jsx'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

export default function Teams() {
  return <ResourcePage resource="teams" endpoint={endpoint} eyebrow="Together is better" title="Teams" description="Manage classes, squads, and shared goals." columns={[{ key: 'name', label: 'Team' }, { key: 'members', label: 'Members' }, { key: 'points', label: 'Points' }, { key: 'status', label: 'Status' }]} />
}
