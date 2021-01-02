import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import logo from '../../assets/global/motiiv_logo.png'
import star from '../../assets/global/star.png'
import search from '../../assets/global/ic_search.png'
import profile from '../../assets/global/sampleImage.PNG'

const activeStyle = {
    color: "#2cff2c",
    borderBottom : "0.2rem solid #2cff2c"
};

const Header = styled.header`
    width: 100%;
    height: 5rem;
    background-color: black;
    display: flex;
    flex-flow : row nowrap;
    align-items : center;
    justify-content: space-between;

    font-size: 1.6rem;
    font-family: 'Campton';
    font-weight: 700;
`;

const Logo = styled.img`
    height: 1.8rem;
    z-index: 3;
    padding-left: 5rem;
`

/*  중앙 네비게이션  */
const TabContainer = styled.div`
    display: flex;
    width:auto;
`;

const TabElem = styled(NavLink)`
    object-fit: contain;
    color: white;
    text-decoration: none;
    padding: 1.6rem 0.8rem;
`;

const Star = styled.img`
    height: 1.2rem;
    margin:1.6rem 1.7rem;
    z-index: 3;
`

/*  우측 로그인 관련  */
const LoginContainer = styled.div`
    display: flex;
    height: 5rem;
    align-items: center;
    align-self: flex-end;
    justify-content: end;
    padding-right: 5rem;
`;

const Search = styled.img`
    padding-right:2rem;
    cursor:pointer;
`

const Login = styled(NavLink)`
    color: white;
    text-align: left;
    text-decoration: none;
`;

const Profile = styled.div`
    width:3rem;
    height:3rem;
    z-index:3;
    background-repeat: no-repeat;
    background-position:center;
    background-size:cover;
    border-radius:100%;
    background-image : ${props => 'url(' + props.src + ')'};
    cursor:pointer;
    //border : "0.2rem solid #2cff2c";
`

function Navbar() {

    const [loginState, setLoginState] = useState({
        'isLoggined' : true,
        'admin' : true
    });

    //이렇게 따로 랜더링하는 것 말고 저 두 요소만 체크할 수 있는 방법은 없을까?
    //adminState === true ? display를 flex로 : display를 none으로 이렇게라던지!

    if(loginState.isLoggined === true){
        if(loginState.admin === true){
            /*  admin 계정으로 로그인했을 경우  */
            return (
                <Header>
                    <NavLink exact to = "/main">
                        <Logo src = {logo}/>
                    </NavLink>
        
                    <TabContainer>
                        <TabElem exact to="/main" activeStyle={activeStyle}>main</TabElem>
                        <Star src = {star}/>
                        <TabElem exact to="/category" activeStyle={activeStyle}>category</TabElem>
                        <Star src = {star}/>
                        <TabElem exact to="/mymotiiv" activeStyle={activeStyle}>mymotiiv</TabElem>
                        <Star src = {star}/>
                        <TabElem exact to="/admin" activeStyle={activeStyle}>admin</TabElem>
                    </TabContainer>
        
                    <LoginContainer>
                        <Search src = {search}/>
                        <Profile src = {profile}/>
                    </LoginContainer>
                </Header>
            )
        }else{
            /*  일반 계정으로 로그인했을 경우  */
            return (
                <Header>
                    <NavLink exact to = "/main">
                        <Logo src = {logo}/>
                    </NavLink>
        
                    <TabContainer>
                        <TabElem exact to="/main" activeStyle={activeStyle}>main</TabElem>
                        <Star src = {star}/>
                        <TabElem exact to="/category" activeStyle={activeStyle}>category</TabElem>
                        <Star src = {star}/>
                        <TabElem exact to="/mymotiiv" activeStyle={activeStyle}>mymotiiv</TabElem>
                    </TabContainer>
        
                    <LoginContainer>
                        <Search src = {search}/>
                        <Profile src = {profile}/>
                    </LoginContainer>
                </Header>
            )
        }
    }else{
        /*  로그인하지 않았을 경우  */
        return (
            <Header>
                <NavLink exact to = "/main">
                        <Logo src = {logo}/>
                </NavLink>
    
                <TabContainer>
                    <TabElem exact to="/main" activeStyle={activeStyle}>main</TabElem>
                    <Star src = {star}/>
                    <TabElem exact to="/category" activeStyle={activeStyle}>category</TabElem>
                    <Star src = {star}/>
                    <TabElem exact to="/mymotiiv" activeStyle={activeStyle}>mymotiiv</TabElem>
                </TabContainer>
    
                <LoginContainer>
                    <Search src = {search}/>
                    <Login to="/signin">login</Login>
                </LoginContainer>
            </Header>
        )
    }
}

export default Navbar
