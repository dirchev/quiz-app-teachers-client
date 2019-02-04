import React, { Component } from "react";
import Typography from "./Content/Typography";
import Table from "./Content/Table";
import Figure from "./Content/Figure";
import Alert from "./Components/Alert";
import Badge from "./Components/Badge";
import Button from "./Components/Button";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Form from "./Components/Form";
import AssessmentCard from './UI/AssessmentCard';
import Tile from "./Components/Tile";
import Quiz from "./UI/Quiz";
import Tabs from "./Components/Tabs";

class Showcase extends Component {
  render() {
    return (
      <div style={{width: '80%', margin: '0 auto'}}>
        <h1>Showcase</h1>
        <h2>Content</h2>
        <Typography />
        <Table />
        <Figure />
        <h2>Components</h2>
        <Alert />
        <Badge />
        <Button />
        <Navbar />
        <Sidebar />
        <Form />
        <Tile />
        <Tabs />
        <h2>UI</h2>
        <AssessmentCard />
        <Quiz />
      </div>
    );
  }
}

export default Showcase;
