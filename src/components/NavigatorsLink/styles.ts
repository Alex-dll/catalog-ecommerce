import Link, { LinkProps } from "next/link"
import styled from "styled-components"

export const Container = styled.div`
  cursor: pointer;
  padding: 1rem;
`

export const Navigators = styled(Link).attrs<LinkProps>(
  ({ href }) => ({ href })
)``

export const Text = styled.h1`
  font-size: 2rem;
  filter: drop-shadow(3px 1px 25px gray);
`
