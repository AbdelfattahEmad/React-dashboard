import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { getReviewActions } from '../../Actions/ReviewActions'


const GetReviewHooks = () => {


    const getData = useSelector((state)=>state.ReviewReducer.getAllReview)


    const dispatch = useDispatch()


    useEffect(()=>{

        dispatch(getReviewActions())

    },[])
    
    return {getData}

}


export default GetReviewHooks