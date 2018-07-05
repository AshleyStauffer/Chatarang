import React from 'react'
import UserInfo from './UserInfo'
import RoomList from './RoomList'

const Sidebar = (props) => {
    return (
        <aside className="Sidebar" style={styles.sidebar}>
      <UserInfo user={props.user} />
      <h1 style={styles.h1}>XTBC 18</h1>
      <RoomList />
    </aside>
    )
}

const styles = {
    sidebar: {
        backgroundColor: '#333344',
        color: 'rgba(255, 255, 255, 0.8)',
        width: '12rem',
        padding: '1rem 0',
        display: 'flex',
        flexDirection: 'column',
    },
          
    h1: {
        color: 'white',
        fontSize: '1.2rem',
        marginTop: '0',
        padding: '0 1rem',
    },
    roomListH2: {
        fontSize: '1rem',
    },
    roomListUl: {
        listStyle: 'none',
        marginLeft: '0',
        paddingLeft: '0',
    },
    roomListLi: {
        marginBottom: '0.5rem',
    },
}
export default Sidebar