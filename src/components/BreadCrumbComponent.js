import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { NavLink } from "react-router-dom";

function Breadlink(props) {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbItem>
                    <NavLink to={props.Links[0]}>{props.Links[0]}</NavLink>
                </BreadcrumbItem>
                <BreadcrumbItem active>{props.Links[1]}</BreadcrumbItem>
            </Breadcrumb>
        </div>
    );
}

export default Breadlink;
