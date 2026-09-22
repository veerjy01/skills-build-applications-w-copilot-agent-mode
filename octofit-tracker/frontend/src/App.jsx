import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const navigation = [
  { label: 'Overview', path: '/', icon: '◈' },
  { label: 'Activities', path: '/activities', icon: '↗' },
  { label: 'Leaderboard', path: '/leaderboard', icon: '◎' },
  { label: 'Teams', path: '/teams', icon: '◇' },
  { label: 'Users', path: '/users', icon: '○' },
  { label: 'Workouts', path: '/workouts', icon: '✦' },
]

function FeedItem({ color, title, meta, time }) {
  return <div className="feed-item"><span className={`feed-dot feed-dot--${color}`} /><div><strong>{title}</strong><span>{meta}</span></div><time>{time}</time></div>
}

function Overview() {
  return <div className="overview-page">
    <section className="welcome-panel"><div><p className="eyebrow">Tuesday, 22 September 2026</p><h1>Keep the momentum.</h1><p className="welcome-copy">A clear view of the movement happening across Mergington High.</p></div><div className="pulse-mark" aria-hidden="true"><span /><span /><span /></div></section>
    <div className="metric-grid">
      <article className="metric-card metric-card--lime"><span className="metric-label">Active students</span><strong>128</strong><span className="metric-note">+12 this week</span></article>
      <article className="metric-card metric-card--coral"><span className="metric-label">Activities logged</span><strong>342</strong><span className="metric-note">Last 30 days</span></article>
      <article className="metric-card metric-card--sky"><span className="metric-label">Team points</span><strong>8,460</strong><span className="metric-note">Across 9 teams</span></article>
    </div>
    <section className="overview-grid">
      <div className="content-card activity-preview"><div className="section-heading"><div><p className="eyebrow">Live feed</p><h2>Recent movement</h2></div><NavLink className="text-link" to="/activities">View all <span>↗</span></NavLink></div><div className="feed-list"><FeedItem color="lime" title="Maya logged a run" meta="Year 10 · 5.2 km" time="8 min ago" /><FeedItem color="coral" title="Team Orbit passed 2,000 points" meta="Leaderboard · Week 4" time="24 min ago" /><FeedItem color="sky" title="Noah completed strength training" meta="Year 9 · 42 min" time="1 hr ago" /></div></div>
      <div className="content-card challenge-card"><p className="eyebrow">Monthly challenge</p><h2>Move as one.</h2><p>Classes are aiming for 10,000 combined activity minutes this month.</p><div className="progress-track"><span style={{ width: '68%' }} /></div><div className="progress-meta"><strong>6,840 min</strong><span>68% complete</span></div></div>
    </section>
  </div>
}

function App() {
  const location = useLocation()
  const currentPage = navigation.find((item) => item.path === location.pathname)
  return <div className="app-shell">
    <aside className="sidebar"><div className="brand-lockup"><img src="/octofitapp-small.png" alt="" className="brand-logo" /><div><strong>OctoFit</strong><span>TRACKER</span></div></div><div className="sidebar-label">Workspace</div><nav className="main-nav" aria-label="Main navigation">{navigation.map((item) => <NavLink key={item.path} to={item.path} end={item.path === '/'} className={({ isActive }) => isActive ? 'nav-item nav-item--active' : 'nav-item'}><span className="nav-icon">{item.icon}</span>{item.label}</NavLink>)}</nav><div className="sidebar-footer"><div className="profile-chip"><span className="avatar">PC</span><span><strong>Paul Octo</strong><small>PE Department</small></span><span className="more">•••</span></div></div></aside>
    <main className="main-content"><header className="topbar"><div><span className="breadcrumb">OctoFit / </span><strong>{currentPage?.label || 'Overview'}</strong></div><div className="topbar-actions"><span className="status-dot" /> API connected <button type="button" className="icon-button" aria-label="Notifications">♢</button></div></header><div className="page-content"><Routes><Route path="/" element={<Overview />} /><Route path="/activities" element={<Activities />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/teams" element={<Teams />} /><Route path="/users" element={<Users />} /><Route path="/workouts" element={<Workouts />} /></Routes></div></main>
  </div>
}

export default App
