import React from "react";
import { useProfile } from "../context/profile.context";
import { Col, Container, Grid, Loader, Row } from "rsuite";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { RoomsProvider } from "../context/room.context";

const Home = () => {
  const { isLoading, profile } = useProfile();
  return (
    <div>
      {!isLoading && profile ? (
        <RoomsProvider>
          <div>
            <h2>{profile.name}</h2>
            <Grid fluid className="h-100">
              <Row>
                <Col xs={24} md={8}>
                  <Sidebar />
                </Col>
              </Row>
            </Grid>
          </div>
        </RoomsProvider>
      ) : (
        <>
          {isLoading ? (
            <Container>
              <Loader
                center
                speed="slow"
                vertical
                content="Loading..."
                size="md"
              />
            </Container>
          ) : (
            <>
              <Link to="signIn"> SignIn Page </Link>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
