import React from 'react'
import styled from 'styled-components'

function Seciton() {
  return (
    <Wrap>
        Section
    </Wrap>

  )
}

export default Seciton

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: url('/images/model-s.jpg'); 
    background-repear: no-repeat;
`