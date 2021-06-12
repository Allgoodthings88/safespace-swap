import React from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'

// Redirects to swap but only replace the pathname
export function RedirectPathToSwapOnly({ location }: RouteComponentProps) {
  return <Redirect to={{ ...location, pathname: '/swap' }} />
}

export function RedirectSafeSpace({ location }: RouteComponentProps) {
  return <Redirect to={{ ...location, pathname: '/swap' , search: '?outputCurrency=0x272E923B510154F6285C5A38F24d448d53a833DD' }} />
}

// Redirects from the /swap/:outputCurrency path to the /swap?outputCurrency=:outputCurrency format
export function RedirectToSwap(props: RouteComponentProps<{ outputCurrency: string }>) {
  const {
    location: { search },
    match: {
      params: { outputCurrency },
    },
  } = props

  const { location } = props
  return (
    <Redirect
      to={{
        ...location,
        pathname: '/swap',
        search:
          search && search.length > 1
            ? `${search}&outputCurrency=0x272E923B510154F6285C5A38F24d448d53a833DD`
            : `?outputCurrency=0x272E923B510154F6285C5A38F24d448d53a833DD`,
      }}
    />
  )
}
