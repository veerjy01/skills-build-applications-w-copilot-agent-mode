import ResourcePage from './ResourcePage.jsx'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

export default function Users() {
  return <ResourcePage resource="users" endpoint={endpoint} eyebrow="People at the centre" title="Users" description="Keep student profiles and participation in one place." columns={[{ key: 'name', label: 'Name' }, { key: 'email', label: 'Email' }, { key: 'team', label: 'Team' }, { key: 'level', label: 'Level' }]} />
}
