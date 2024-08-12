import React from "react";
import Layout from "../components/Layout";
import {Row, Col, Image} from "react-bootstrap";
import CreatePost from "../components/expenses/CreateExpense";
import {Expense} from "../components/expenses/Expense";

import { fetcher } from "../helpers/axios";
import useSWR from 'swr';

function Home(){
    const expenses = useSWR("/expenses/", fetcher, {
        refreshInterval: 1000,
    }); 

    return (
        <Layout>
            <Row className="justify-content-evenly">
                <Col sm={7}>
                    <Row className="border rounded  align-items-center">
                        <Col sm={10} className="flex-grow-1">
                            {/* <CreatePost /> */}
                            {/* <Expense /> */}
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Layout>
    )
}

export default Home;