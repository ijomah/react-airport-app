import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlaneCard = ({ flight }) => {
 
  return (
    <div className='w-25 tc grow bg-light-blue br0 pa3 ma2 dib bw2 shadow-5'>
      <div>
        <p className='d-inline-block mb-0 card-text w-50'>Country: </p><p className='d-inline-block border border-warning border-2 w-50 p-1 rounded'>{flight[2] === undefined ? 'N/A' : flight[2]}</p>
        <p className='d-inline-block mb-0 card-text w-50'>Call Sign: </p><p className='d-inline-block border border-info border-2 w-50 p-1 rounded'>{flight[1] === undefined ? 'N/A' : flight[1]}</p>
        <p className='d-inline-block mb-0 card-text w-50'>Date: </p><p className='d-inline-block border border-warning border-2 p-1 w-50 rounded'>{flight[3] === undefined ? 'N/A' : new Date(flight[3] * 1000).toLocaleDateString()}</p>
        <p className='d-inline-block mb-0 card-text w-50'>Time: </p><p className='d-inline-block border border-info border-2 p-1 w-50 rounded'>{flight[3]  === undefined ? 'N/A' : new Date(flight[3] * 1000).toLocaleTimeString()}</p>
        {flight[11] === undefined ? 'N/A' : 
        (flight[11] < 0 ? 
          (<><p className='d-inline-block mb-0 card-text w-50'>Departure: </p><p className='d-inline-block border border-warning border-2 w-50 p-1 rounded'><FontAwesomeIcon icon="plane-departure" /></p></>) :
          (<><p className='d-inline-block mb-0 card-text w-50'>Arrival: </p><p className='d-inline-block border border-white border-2 w-50 p-1 rounded'><FontAwesomeIcon icon="plane-arrival" /></p></>))
        }
      </div>
    </div>
  );
}

export default PlaneCard;


// <td *ngIf="flightInfo[11] > 0; else showDis" id="departure"><i class="bi bi-arrow-up-square-fill"></i></td>
// <td *ngIf="flightInfo[11] < 0; else showDis" id="arrival"><i class="bi bi-arrow-down-square-fill"></i></td>
// <ng-template #showDis>
//   <td id="arrival">N/A</td>
// </ng-template>
// </tr>