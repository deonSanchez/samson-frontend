import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavigationDrawer from "../components/Home/NavigationDrawer";

const Home = (): JSX.Element => {
  return (
    <Container>
      <NavigationDrawer />
      <div>
        <Outlet />
      </div>
    </Container>
  );
};

export default Home;
