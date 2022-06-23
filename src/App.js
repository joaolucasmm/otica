import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' align='center' component='h1'>Parâmetros da lente</Typography>
      <FormularioCadastro />
    </Container>
  );
}

export default App;