import React from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'

// Redirects to swap but only replace the pathname
export function RedirectPathToSwapOnly({ location }: RouteComponentProps) {
  return <Redirect to={{ ...location, pathname: '/swap' }} />
}

export function RedirectSafeSpace({ location }: RouteComponentProps) {
  return <Redirect to={{ ...location, pathname: '/swap' , search: '?outputCurrency=0xe1db3d1ee5cfe5c6333be96e6421f9bd5b85c987' }} />
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
            ? `${search}&outputCurrency=0xe1db3d1ee5cfe5c6333be96e6421f9bd5b85c987`
            : `?outputCurrency=0xe1db3d1ee5cfe5c6333be96e6421f9bd5b85c987`,
      }}
    />
  )
}
