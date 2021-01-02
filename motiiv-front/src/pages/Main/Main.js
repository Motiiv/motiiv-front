import React from 'react'
import Tag from '../../components/Tag/tag';
import Card from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar'

function Main({object}) {
    return (
        <>
            <Navbar/>
            <Card object = {object}></Card>
        </>
    )
}

export default Main
