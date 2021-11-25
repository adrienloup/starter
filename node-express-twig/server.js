const Twig = require('twig')
const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.use('/dist', express.static('dist'))

app.set('twig options', {
  allow_async: true,
  strict_variables: true
})

const routes = [
  { path: '/', twig: 'page1.twig' },
  { path: '/page1', twig: 'page1.twig' },
  { path: '/page2', twig: 'page2.twig' },
  { path: '/page3', twig: 'page3.twig' },
]

routes.forEach(route => {
	app.get(route.path, function(req, res) {
    res.setHeader('Cache-Control', 'public, max-age=3600')
	  res.render(route.twig, { partial: !!req.query.partial })
	})	
})

app.listen(port, () => console.info('\x1b[34m╰>\x1b[32m> \x1b[0mrunning at \x1b[34mhttp://localhost:%s/\x1b[0m', port))
