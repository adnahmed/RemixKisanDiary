import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { createContext } from 'react'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
})

export const MyContext = createContext('default')

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="root-body">
        <MyContext.Provider value="bonjour!">
          <Header />
        </MyContext.Provider>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <MyContext.Provider value="au revoir!">
          <Footer />
        </MyContext.Provider>
      </body>
    </html>
  )
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}
