import React from 'react'
import { Affix, PageHeader } from 'antd';
import { withRouter } from "react-router-dom";


const AppHeader = (props) => (
    <Affix>
        <PageHeader onBack={() => props.history.push("/")} title= "Back" />
    </Affix>
)

export default withRouter(AppHeader)