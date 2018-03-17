import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { PlainLayout } from '../layouts'

import routes from './routes.config'

export default () => (
	<BrowserRouter>
		<Switch>
			<PlainLayout>
				{renderRoutes(routes)}
			</PlainLayout>
		</Switch>
	</BrowserRouter>
)