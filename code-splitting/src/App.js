/* This one is NOT using code splitting */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Users from "./pages/Users";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

/* This one is using code splitting */
// import { lazy, Suspense } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Header from "./Header";
// const Users = lazy(() => import("./pages/Users"));
// const Home = lazy(() => import("./pages/Home"));
// const About = lazy(() => import("./pages/About"));

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <div>
//           <Header />

//           <Switch>
//             <Suspense fallback={<div>Loading...</div>}>
//               <Route path="/about">
//                 <About />
//               </Route>
//               <Route path="/users">
//                 <Users />
//               </Route>
//               <Route exact path="/">
//                 <Home />
//               </Route>
//             </Suspense>
//           </Switch>
//         </div>
//       </Router>
//     </div>
//   );
// }

export default App