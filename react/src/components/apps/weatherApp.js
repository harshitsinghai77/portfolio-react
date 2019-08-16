import React from 'react'
import Header from '../portfolio/header/header'
import axios from 'axios';
import {Input, Card, Spin, Typography } from 'antd';

const ResultCard = (props) => {
    const data = props.data
    if(typeof data === 'string'){
        return (
            <Typography.Title level={2}  style = {{textAlign: 'center'}}>{data}</Typography.Title>
        )
    }
    return(
        Object.keys(data).map(key => (
            <div key = {key} className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card">
                            <Card title={key} bordered={false}>
                                {data[key]}
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        ))
    );
}

function WeatherApp() {

    const [data, setData] = React.useState({});
    const [spinning, setSpinning] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('')
    function search(value){
        setSpinning(true)
        axios.post('http://localhost:4000/weather/address', {address: value})
            .then(resp => {
                setData(resp.data)
                setSearchValue('')
                setSpinning(false)
            })
            .catch(err => {
                setData('Some error occured. Please try again later.')
                setSpinning(false)
            })
        };

    return(
        <React.Fragment>
            <Header />
            <Typography.Title level={2}  style = {{textAlign: 'center'}}>Weather App using Node.js and React</Typography.Title>
            <Card>
                <Input.Search
                    placeholder="Enter your location"
                    enterButton="Search"
                    size="large"
                    value = {searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    onSearch={value => search(value)}
                    style={{marginBottom: '20px', padding:'0px 20%'}}
                />
                {spinning ? <Spin size = "large" style = {{padding:'0px 45%'}} /> : 
                            <ResultCard data={data} />}
            </Card>
        </React.Fragment>
    )
}

export default WeatherApp;
