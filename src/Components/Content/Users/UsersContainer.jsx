import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unFollow, setUsersList, 
    setTotalUsersAmount, setCurrentPage, setIsFetching, setFollowedItems, 
    getUsers} 
    from './../../../Redux/UsersPageReducer';
import Preloader from '../Common/Preloader/Preloader';
import {loadUsers, loadCurrentPage, loadPageSize,
loadTotalUsersAmount, loadIsFetching, 
loadFollowedItems, loadIsAuth} from '../../../Redux/Selectors/UserSelectors';


class UsersDAL extends React.Component {

  componentDidMount() {

    this.props.getUsers(this.props.currentPage,this.props.pageSize);
   
  }

  onPageClick = (P) => {

    this.props.setCurrentPage(P);
    
    this.props.getUsers(P,this.props.pageSize);

  }

  render() {
    
    return (
      <div>
        {this.props.isFetching ? <Preloader/>: 
        (
        <Users onPageClick={this.onPageClick}
        {...this.props}
        
        
        />)
        
        }
        
        </div>
    )

  }
}

let mapStateToProps = (state) => {
  return {
    
    users: loadUsers(state),
    currentPage: loadCurrentPage(state),
    pageSize: loadPageSize(state),
    totalUsersAmount: loadTotalUsersAmount(state),
    isFetching: loadIsFetching(state),
    followedItems: loadFollowedItems(state),
    isAuth: loadIsAuth(state)


  }
}

let mapDispatchToProps = {
  
    follow, unFollow, setUsersList,setCurrentPage,

    setTotalUsersAmount, setIsFetching, setFollowedItems, getUsers,

    

  
}


let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersDAL);


export default UsersContainer;
