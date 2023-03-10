import Header from "../components/header";
import React from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import Carosal from "../components/carosal";
import Footer from "../components/footer";


export default function Home(){
    // const value = useContext(UserContext);
    // const {isLogged,setIsLogged,menu} = value;
    // console.log(menu);


    const menuList = useSelector((state) => state.menus.value)
    const dispatch = useDispatch()


    let category_list = menuList.map((val,i) =>{
        return (
            val && val.foodMenu.map(value => value.category))
    })

    let category_arr = category_list.flat()

    let filter_category = category_arr.filter((item,
        index) => category_arr.indexOf(item) === index);

    console.log(filter_category);
    console.log(category_arr);

    return (
        <div>
            <Header />
            {/* <Carosal /> */}
            <div className="container margin-top">

                <div className="row">
                    <h2 className="text-center text-muted">Restaurant Name</h2>
                    {menuList && menuList.map((val, i)=>{
                        return(
                            <div className="col-4 pb-4 box-shadows" key={i}>
                                <p>{console.log(val)}</p>
                                <Link to={`/menu/${val.restaurantName}`} className='menu_link text-muted'>

                                    <img src={val.img} className="card-img-top img-width" alt=""/>
                                    <div className="card-body">
                                        <h5 className="card-title">{val.restaurantName}</h5>
                                        <p className="card-text">{val.foodList}</p>
                                    </div>
                                </Link>

                            </div>
                        )   
                    })}
                </div>

                <div className="row">
                    <h2 className="text-center text-muted mt-3 mb-5">By Category</h2>
                    <div className="row">
                        {filter_category && filter_category.map((val, index) => {
                            return (
                                <div className="col-3" key={index}>
                                    <Link to={`/menu/${val}`} className='menu_link text-muted'>
                                        <div className="card-body">
                                            <h5 className="card-title">{val}</h5>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div> <br/> <br/>   

            <Footer />       
        </div>
    )
}

