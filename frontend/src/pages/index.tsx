import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import { InputAdornment, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Nearby - Home</title>
      </Head>
      <div className="row1 bg-top">
        <img src="/logo1.png" alt="" width="20%" />
        <span className="subtitle">
          Encontre lojas e produtos mais próximos de você
        </span>

        <TextField
          id="input-with-icon-textfield"
          label="Pesquisar"
          color="secondary"
          placeholder="Insira aqui o nome da loja ou produto e pressione ENTER..."
          style={{ width: '50%' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          variant="outlined"
          focused
        />
      </div>

      <div className="row2 bg-down">
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          style={{ marginTop: '10px' }}
        >
          Nossos Clientes
        </Typography>
      </div>
    </Container>
  )
}

export default Home
