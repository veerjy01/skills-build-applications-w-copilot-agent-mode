import ResourcePage from './ResourcePage.jsx'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

export default function Workouts() {
  return <ResourcePage resource="workouts" endpoint={endpoint} eyebrow="Personalised plans" title="Workouts" description="Offer the right next step for every fitness level." columns={[{ key: 'name', label: 'Workout' }, { key: 'focus', label: 'Focus' }, { key: 'level', label: 'Level' }, { key: 'duration', label: 'Duration' }]} />
}
