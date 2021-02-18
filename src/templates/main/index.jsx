import { Route } from "react-router-dom";


const HomeLayout = (props) => {
    return (
        <>
            <main>{props.children}</main>
        </>
    );
};

const RouteMain = (props) => {
    const { Component, ...routes } = props;
    return (
      <Route {...routes}>
        <HomeLayout>
          <Component />
        </HomeLayout>
      </Route>
    );
  };
export default RouteMain