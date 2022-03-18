import { useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Burger from "./Components/Burger";
import Menu from "./Components/Menu";
import { Contact } from "./Pages/Contact";


import { Main } from "./Pages/Main";

import { useOnClickOutside } from './hooks';


export function AppRoutes(){
    const [open, setOpen] = useState(false);
    const node = useRef<HTMLDivElement>(null);
    useOnClickOutside(node, () => setOpen(false));
    return(
        <Router>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </Router>
    )
}
