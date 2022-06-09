import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchSlots } from './actions'
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/lib/table';

import { useSelector } from "react-redux";
const Slots = ()=>{
  	const slots = useSelector((store) => store.Slot.slot);
    	const dispatch = useDispatch()
	console.log("slots",slots)
	React.useEffect(()=>{
		dispatch(fetchSlots())	
	},[])
	return(
		<>
		<table>
		<thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Consultation type</th>
      <th scope="col">date</th>
      <th scope="col">doctor</th>
      
      <th scope="col">specialization</th>
      <th scope="col">organisation</th>
      <th scope="col">time</th>
      <th scope="col">duration</th>
		
      <th scope="col">isVacant</th>
    </tr>
  </thead>
		  <tbody>
      {slots?.data?.map(row => (
        <tr key={row.id}>
	  <td>{row.id}</td>
          <td>{row?.consultationtype?.consultationType}</td>
          <td>{row.date}</td>
	      <td>{row?.doctor?.firstName}</td>
	      <td>{row?.doctor.specialization?.specialization}</td>
	      <td>{row?.organisation?.name}</td>
	      <td>{row?.time}</td>
	      <td>{row?.duration}</td>
	      <td>{row?.isVacant.toString()}</td>
        </tr>
      ))}  </tbody>
      </table></>
	)
}
export default Slots
