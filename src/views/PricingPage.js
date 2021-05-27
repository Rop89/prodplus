import React, { Component } from "react";
import PricingCard from "../components/PricingCard";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import { storage } from "../firebase/index";

class PricingPage extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: "",
      username: "",
      items: [],
    };
  }
  componentDidMount() {
    const itemsRef = storage.database().ref("items");
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user,
        });
      }
      this.setState({
        items: newState,
      });
    });
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="flex flex-col justify-content items-center">
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
        <BottomNav />
      </>
    );
  }
}

export default PricingPage;
