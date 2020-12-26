import React from 'react'
import styled from 'styled-components'
import {Button, Grid} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import { ReactComponent as Logo } from '../../assets/logo-react-zzaria.svg'

const Login = () => (
  <Container>
    <Grid container direction='column' justify='center' spacing={40}>
      <Grid item>
        <Logo style={{ width: '100%' }} />
      </Grid>
      <Grid item xs={12} container justify='center'>
        <GitHubButton>
          Logar com <GitHubIcon style={{ marginLeft: '5px' }} />
        </GitHubButton>
      </Grid>
    </Grid>
  </Container>
)

const Container = styled.div`
  padding: 20px;
`

const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    max-width: 430px;
    font-size: 22px;
    padding: 5px;
    text-transform: none;
    margin-top: 20px;
  }
`

export default Login
