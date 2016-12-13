import React from 'react'
import BlogList from '../blogList/BlogListContainer'
import SideBar from '../sideBar/SideBarContainer'
import { PageHeader } from 'react-bootstrap';

class MainPage extends React.Component{
    render() {
        return (
            <div >
                <div className="grid__row" >
                    <div className="grid__main" >
                        <PageHeader>James M. Balata</PageHeader>
                        <BlogList />
                    </div>
                    <div className="grid__sidebar" >
                        <SideBar />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage