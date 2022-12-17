import React,{useState , useEffect} from 'react'
import { getProductsBySlug } from "../../actions";
import { saveAs } from 'file-saver';
import { useDispatch , useSelector} from "react-redux";
import getParams from "../../utils/getParams";
import {  Link, useLocation } from 'react-router-dom';
import './Course.scss'
import { getAllCategory } from '../../actions';
import { getAllGroups} from '../../actions/Groups';
import { generateCloud } from '../../urlConfig';
import {useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'
import parse from 'html-react-parser';
import  getYouTubeID from 'get-youtube-id';
import YouTube from 'react-youtube';
import {GiEarthAmerica} from 'react-icons/gi'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import Back from "../common/back/Back"









const Course = () => {
  const categories = useSelector(state =>state.category?.categories);
  const Course = useSelector(state =>state?.product.products);
  const [Index, setIndex] = useState(0)

  const location = useLocation()
  console.log(location)

  const navigator = useNavigate()
  const [SideBAr, setSideBAr] = useState('false')
  const groups = useSelector(state=>state?.Groups?.Groups?.Groups)
  const  slug  = getParams(location.search);
  const Slug =  location.pathname.split('/')[2]
  console.log(Slug)

  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(getProductsBySlug(Slug))
  }, [])
  useEffect(() => {

    dispatch(getAllCategory());
    dispatch(getAllGroups())

  }, []);


  const element = categories?.find((item)=>{
    return  item.slug === slug?.category
   })

   const course = element?.children?.find((item)=>{
    return  item._id === slug.cid
  })
  const GroupAvailable = groups?.filter((item)=>{
    return  item?.category?._id === course?._id
  })
  console.log(GroupAvailable)
  const renderCategories = (course) => {
    let myCategories = [];
    for (let category of course) {
      myCategories.push(
        <a className="listOfCategory" key={category.name}>
          {category.parentId ? <a  key={category.parentId} href={`/children/${category?.slug}?cid=${category?._id}&type=${category?.type}&category=${element?.slug}&children=${course?.slug}`}>{category.name} </a> :
            <a > <i className="fas fa-angle-right"></i> {category.name}</a>
          }
           {category.children.length > 0 ? (<a className="listCategory" key={category.children}>{renderCategories(category.children)}</a>) : null}
           
        </a>
       
      );
    }
    return myCategories;
  }
    

  if (course?.children?.length> 0){
    console.log(renderCategories(course?.children))
  }
   const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };
  
  return (
    <>
          <Back title='Explore Courses' />

     <div className='mt-5 mb-5'>
 
       
     
   {/*      <div class={`side-bar ${SideBAr && "active"}`} >

         <div id="close-side-bar" class="fas fa-times" onClick={()=>setSideBAr(false)}></div>
         <div class="user">
         <img src={generateCloud(course?.img)}  alt="" />
         <h3> {course?.name}</h3>
            </div>
         <nav class="na">
              <h3 style={{textAlign:'center', marginTop:"1rem"}}> chapters</h3>
                     {course?.children?.length > 0 ? ( renderCategories(course?.children) ):(<h1> nothing  </h1>)}
         </nav>

     
     </div> */}
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
        <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>الدرس</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {parse(Course[Index]?.description)}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>الواجبات والملخصات</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className='resume'>
              {Course[Index]?.productPictures ? Course[Index]?.productPictures.map((imag,index)=>(
                <div>
                   <Button variant="primary" onClick={()=>{saveAs(imag.img)}}>{index+1} إضغط لتحميل</Button>

                </div>
                
              )):(<>
              </>)}
              </div>
         
        </AccordionDetails>
      </Accordion>

    </div>


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
     


    
  </div>
    </>
  )
}

export default Course