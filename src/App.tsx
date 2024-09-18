import { AppBar, Toolbar, Typography, Container, CssBaseline } from "@mui/material"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Login from './components/Login';

const queryClient = new QueryClient();

function App() {

  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Car Shop
          </Typography>
        </Toolbar>
      </AppBar> 
      <QueryClientProvider client={queryClient}> 
        <Login />
      </QueryClientProvider>
    </Container>
  );
}

export default App
