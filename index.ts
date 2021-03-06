import express from 'express'
import { mock } from './mock'
import { TemplateMap } from './setup'

const port = Number.parseInt(process.argv[2])
const app = express()

app.use(express.json())

app.post('/mock', (req, res) => {
  const body = req.body
  const template = TemplateMap.get(body.template)
  console.log(JSON.stringify(body,null,2))
  res.send(mock(template,{filters:body.filters,orders:body.orders,count:body.count}))
})

app.listen(port, () => {
  console.log(`Mock server started at http://localhost:${port}`);
})