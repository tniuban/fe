import { Route } from "react-router-dom";
const AdminLayout = (props) => {
  return (
    <>
      <main>{props.children}</main>
    </>
  );
};

const RoutesAdmin = (props) => {
  const { Component, ...routes } = props;
  return (
    <Route {...routes}>
      <AdminLayout>
        <Component />
      </AdminLayout>
    </Route>
  );
};

export default RoutesAdmin;
