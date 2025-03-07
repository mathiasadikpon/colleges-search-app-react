import { Col, Row, Breadcrumb, BreadcrumbItem, Badge } from "reactstrap";
import { Link } from "react-router-dom";

const SubHeaderHome = ({ current, detail, collegesSelected }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "star",
          justifyContent: "space-between",
        }}
      >
        <Row>
          <Col className="m-2">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/">Home</Link>
              </BreadcrumbItem>
              {detail && (
                <BreadcrumbItem>
                  <Link to="/search">Search</Link>
                </BreadcrumbItem>
              )}
              <BreadcrumbItem active>{current}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{current}</h2>
          </Col>
        </Row>

        <h3 style={{ margin: 0 }}>
          Colleges Selected
          <Badge color="primary" pill className="m-2">
            {collegesSelected.length}
          </Badge>
        </h3>
      </div>
      <hr />
    </>
  );
};

export default SubHeaderHome;
