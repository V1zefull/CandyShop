import React from 'react';
import NavComponent from "../component/NavComponent";
import FooterComponent from "../component/FooterComponent";
import InventoryComponent from "../component/InventoryComponent";

export default function Inventory() {
    return (
        <div className="App">
            <NavComponent/>
            <InventoryComponent/>
            <FooterComponent/>
        </div>
    );
}