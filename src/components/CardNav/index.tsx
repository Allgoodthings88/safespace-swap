import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'
import TranslatedText from '../TranslatedText'

const StyledNav = styled.div`
  margin-bottom: 40px;
`

const Nav = ({ activeIndex = 0 }: { activeIndex?: number }) => (
  <StyledNav>
    <ButtonMenu activeIndex={activeIndex} size="sm" variant="subtle">
      <ButtonMenuItem id="swap-nav-link" to="/swap?outputCurrency=0xe1db3d1ee5cfe5c6333be96e6421f9bd5b85c987" as={Link}>
        <TranslatedText translationId={8}>Swap</TranslatedText>
      </ButtonMenuItem>
      <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
        <TranslatedText translationId={74}>Pool</TranslatedText>
      </ButtonMenuItem>
       
    </ButtonMenu>
  </StyledNav>
)

export default Nav
