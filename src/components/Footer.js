import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <AuthoFooter>Made from Enis Kastrati @github.com/eniskastrati</AuthoFooter>
    )
}

export default Footer

const AuthoFooter = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    font-weight: 600;
    opacity: 3.2;
    width: auto;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`