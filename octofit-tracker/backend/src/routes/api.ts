import { Router } from 'express'

const apiRouter = Router()

apiRouter.get('/', (_request, response) => {
  response.json({
    name: 'OctoFit Tracker API',
    version: '1.0.0',
    resources: ['users', 'activities', 'teams', 'leaderboard', 'workouts'],
  })
})

apiRouter.get('/health', (_request, response) => {
  response.json({ status: 'ok' })
})

apiRouter.get('/users', (_request, response) => {
  response.json([])
})

apiRouter.get('/activities', (_request, response) => {
  response.json([])
})

export default apiRouter