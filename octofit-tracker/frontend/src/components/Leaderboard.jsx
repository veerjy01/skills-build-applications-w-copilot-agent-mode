import ResourcePage from './ResourcePage.jsx'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

export default function Leaderboard() {
  return <ResourcePage resource="leaderboard" endpoint={endpoint} eyebrow="Friendly competition" title="Leaderboard" description="See who is moving the whole school forward." columns={[{ key: 'rank', label: 'Rank' }, { key: 'name', label: 'Student' }, { key: 'team', label: 'Team' }, { key: 'points', label: 'Points' }]} />
}
