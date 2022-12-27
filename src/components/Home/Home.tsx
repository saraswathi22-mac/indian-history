import React from "react";
import { Button } from "../../common/Button/Button";
import Container from "../../common/Container/Container";
import Modal from "../../common/Modal/Modal";

const Home = () => {
  return (
    <Container>
      <Modal />
      <Button locate="/ancient_history" title="Ancient History" />
      <Button locate="/medieval_history" title="Medieval History" />
    </Container>
  );
};

export default Home;
