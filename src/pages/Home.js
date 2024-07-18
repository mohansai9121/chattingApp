import React from "react";
import { useProfile } from "../context/profile.context";
import { Col, Container, Grid, Loader, Row } from "rsuite";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const { isLoading, profile } = useProfile();
  return (
    <div>
      {!isLoading && profile ? (
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
      ) : (
        <Container>
          <Loader center vertical size="md" content="loading" speed="slow" />
        </Container>
      )}
    </div>
  );
};

export default Home;
