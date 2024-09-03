import react from 'react'
import Cards from '../cards/Cards'
import './Maindash.css'
import { Grid } from '@mui/material';

import Employeechart from '../charts/Employeechart';
import Cardbig from '../cards/Cardbig';
import Talentchart from '../charts/Talentchart'
import Announcement from '../Announcement/Announcement';
const Maindash = ({ setisopen }) => {
    const details = [
        { id: 1, heading: 'Available Position', count: 24, bgclr: '#FFFDD0', txtclr: '#FFA500', requirements: '4 urgently needed' },
        { id: 2, heading: 'Job Open', count: 10, bgclr: '#ADD8E6', txtclr: '#00008B', requirements: '4 Active hiring' },
        { id: 3, heading: 'New Employees', count: 24, bgclr: '#FFB6C1', txtclr: '#AA336A', requirements: '4 Depratment' },
    ]
    const cardbigdetails = [
        { id: 1, heading: 'Total Employees', count: 216, men: 120, women: 96, graphcomponent: <Employeechart />, bgclr: '#FFFDD0', data: '+2% Past month' },
        { id: 2, heading: 'Talent Request', count: 16, men: 6, women: 10, graphcomponent: <Talentchart />, bgclr: '#FFFDD0', data: '+5% Past month' }
    ]
    return (
        <div className='Maindash' >
            <h2>Dashboard</h2>
            <div style={{display:'flex',flexDirection:'column',alignContent:'center'}}>

                <div className='detail' style={{ display:'flex',alignItems:'center',justifyContent:'space-evenly', }}>
                    {details.map((detail) => {
                        return (

                            <Cards key={detail.id} heading={detail.heading} count={detail.count} bgclr={detail.bgclr} txtclr={detail.txtclr} requirements={detail.requirements} />
                        )
                    })}
                </div>
                <div className='bigcardgrid' style={{display:'flex',justifyContent:'space-evenly'}}>
                    {cardbigdetails.map((item) => {
                        return (
                            <Cardbig key={item.id} heading={item.heading} count={item.count} men={item.men} women={item.women} graphcomponent={item.graphcomponent} bgclr={item.bgclr} data={item.data} />
                        )
                    })}
                </div>
                <Announcement />
            </div>
        </div>
    )
}
export default Maindash;