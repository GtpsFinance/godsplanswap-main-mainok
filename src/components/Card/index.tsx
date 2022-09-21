Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@GtpsFinance 
ApeSwapFinance
/
apeswap-frontend
Public
Code
Issues
6
Pull requests
13
Actions
Projects
Security
Insights
apeswap-frontend/src/components/CardValue/index.tsx /
@Harambe-Nakamoto
Harambe-Nakamoto feat: Add swap apr
Latest commit 41b0ca9 on Mar 18
 History
 1 contributor
61 lines (54 sloc)  1.31 KB

import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useCountUp } from 'react-countup'
import { Text } from '@apeswapfinance/uikit'

interface CardValueProps {
  value: number
  decimals?: number
  fontSize?: string
  fontFamily?: string
  prefix?: string
  color?: string
  text?: string
  fontWeight?: number
  differentFontSize?: string
  top?: string
}

const CardValue: React.FC<CardValueProps> = ({
  value,
  decimals,
  fontSize = 'px',
  prefix,
  color,
  fontFamily,
  fontWeight,
  top,
  differentFontSize,
}) => {
  const { countUp, update } = useCountUp({
    start: 0,
    end: value,
    duration: 1,
    separator: ',',
    decimals:
      // eslint-disable-next-line no-nested-ternary
      decimals !== undefined ? decimals : value < 0 ? 4 : value > 1e5 ? 0 : 3,
  })

  const StyledText = styled(Text)`
    margin-top: ${top || 0};
    font-weight: ${fontWeight || 400};
    ${({ theme }) => theme.mediaQueries.xl} {
      font-size: ${differentFontSize || fontSize};
    }
  `

  const updateValue = useRef(update)

  useEffect(() => {
    updateValue.current(value)
  }, [value, updateValue])

  return (
    <StyledText fontSize={fontSize} color={color} fontWeight={fontWeight} fontFamily={fontFamily}>
      {prefix} {countUp}
    </StyledText>
  )
}

export default CardValue
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
