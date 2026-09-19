import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Container from "../components/ui/Container";

function App() {
  return (
    <MainLayout>
      <Container>
        <Home />
      </Container>
    </MainLayout>
  );
}

export default App;