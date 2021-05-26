import { Pagination, PaginationItem } from '@material-ui/lab'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { usePlayers } from '../../CustomHooks/usePlayers'
import { useStyles } from '../../CustomHooks/useStyles'
import {  getWholeAction } from '../../redux/actions/TeamAction'


export const PaginationPlayers = () => {
    const { page } = usePlayers()
    const classes = useStyles()
    const dispatch = useDispatch();
    
    const { numberOfPages } = useSelector(state => state.teams)
    useEffect(()=>{
       if(page) dispatch(getWholeAction())
    },[page])
    return (
        <div>
            <Pagination
              classes={{ul: classes.ul }}
              count={numberOfPages}
              page={Number(page) || 1}
              variant="outlined"
              color="primary"
              renderItem={(item) => (
                  <PaginationItem 
                    {...item}
                    component={Link}
                    to={`/teams?page=${item.page}`} />
              )} 
            />
            
        </div>
    )
}
