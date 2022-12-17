import React ,{ useState} from 'react'
import { getProductsBySlug } from "../../../actions";
import { saveAs } from 'file-saver';
import { useDispatch , useSelector} from "react-redux";
import getParams from "../../../utils/getParams";
import {  useLocation } from 'react-router-dom';
import { getAllCategory } from '../../../actions';
import { useEffect } from 'react';
import { generateCloud } from '../../../urlConfig';
import {useNavigate} from 'react-router-dom'
import {Accordion , Alert,Table,Button,Container} from 'react-bootstrap';
import parse from 'html-react-parser';
import  getYouTubeID from 'get-youtube-id';
import YouTube from 'react-youtube';



const Children = () => {
    const categories = useSelector(state =>state.category?.categories);
    console.log(categories)
    const Course = useSelector(state =>state?.product.products);

  
    const location = useLocation()
    const navigator = useNavigate()
    const [SideBAr, setSideBAr] = useState('false')
    const [Index, setIndex] = useState(0)


  
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
      const  slug  = getParams(location.search);
    const Slug =  location.pathname.split('/')[2]
    const dispatch = useDispatch()
  
  
  
    useEffect(() => {
      dispatch(getProductsBySlug(Slug))
    }, [Navigator])
  
  
  
  
    useEffect(() => {
  
      dispatch(getAllCategory());
    }, []);
  
  
    const element = categories?.find((item)=>{
      return  item.slug === slug?.category
     })
  
     const courses = element?.children?.find((item)=>{
      return  item.slug === slug.children
     })
     const course = courses?.children?.find((item)=>{
        return  item._id === slug.cid
    })
  return (


    <>
    <section className="heading-link">
        <span  onClick={()=>setSideBAr(true)} style={{cursor:'pointer'}}> دروس اونلاين</span>
        <p> <a href="/">home</a> / <a href={`/category?Query=${element?.slug}`}>{element?.name}</a>/ <a href={`/${courses?.slug}?cid=${courses?._id}&type=${courses?.type}&category=${element?.slug}`}>  {courses?.name}</a> </p>
       </section>
    <Container className='mt-5 mb-5'>
<div className='cont'>
   {Course.length > 0 ? (
    <>
    <div className='main_video'>
    
        <div className='our_video'>
        <YouTube videoId={getYouTubeID(Course[Index]?.youtubeUrl, {fuzzy: false})} opts={opts}  />

        <h3 className='title-video'>
               {Course[Index]?.name}
        </h3>

        </div>
           <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{fontSize:'3rem'}}>description</Accordion.Header>
        <Accordion.Body>
        {parse(Course[Index]?.description)}
        
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header style={{fontSize:'3rem'}}>compendium</Accordion.Header>
        <Accordion.Body>
        <div className='resume'>
              {Course[Index]?.productPictures ? Course[Index]?.productPictures.map((imag,index)=>(
                <div>
                   <Button variant="primary" onClick={()=>{saveAs(imag.img)}}>download resume{index+1} </Button>

                </div>
                
              )):(<>
              </>)}
              </div>
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>

      <div className='video-list'>
        {Course.map((item , index)=>(
            <div className={`vid ${Index===index && 'active'}`} onClick={()=>setIndex(index)} key={item?.name}>
              {item?.productPictures && <img src={item?.productPictures[0]?.img} alt="" /> }
            <h3 className='title-video'>
             {item?.name}
            </h3>
            </div>   
        ))}
      
      </div>
    </>
    ):(<>
   </>) }

 

    </div>

</Container>
    </>
  )
}

export default Children