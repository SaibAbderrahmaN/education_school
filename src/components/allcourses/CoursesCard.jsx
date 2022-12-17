import React, { useEffect } from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"
import { Link , NavLink} from 'react-router-dom'
import { useDispatch ,useSelector } from 'react-redux'
import { getAllCategory, getAllPages } from '../../actions';
import { generateCloud } from '../../urlConfig'
import admin from '../common/header/318982833_557371409602698_7185172479401007514_n (1).jpg'
import { motion , useMotionValue , useTransform } from 'framer-motion'


const CoursesCard = () => {

  const transition = { duration: 2, type: "spring" };

  const categories = useSelector(state =>state.category?.categories);
  console.log(categories)
  const pages = useSelector(state => state.product?.AllPages?.products?.getAllPages)
  const dispatch = useDispatch();
     /*------------------------------- GEt ALL CATEGORIES  -----------------------------------------*/
     useEffect(() => {
        dispatch(getAllCategory());
        dispatch(getAllPages())
      }, []);
  


  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {categories?.length> 0 && categories?.map((item) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={generateCloud(item.img)} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{item?.name}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                                          <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={admin} alt='' />
                          </div>
                          <div className='para'>
                            <h4>zineb saib</h4>
                          </div>
                        </div>
                      </>
               
                  </div>
                </div>
              </div>
         
              <button className='outline-btn'><a href={`/category/${item.slug}`}> إبدأ الأن</a></button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard
