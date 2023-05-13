import React from "react";

const flightTime = (flightDetail) => {
    return (
        <>
            <button class="btn btn-primary" routerLink="/dashboard">Back</button>
            <div  class="container" style="max-width: 1240px">
                <div class="row">
                </div>
                <div>
                {/* <h5  class="card-title">Flights Between: <span> {{timeObj.timeBeg + ',' + ' ' + timeObj.dateBeg + ' ' + 'and' + ' ' + timeObj.timeEnd + ',' + ' ' + timeObj.dateEnd}}</span></h5> */}
                <div class="row">
                    
                    <div  id="card-border" class="col-md-9 sm col-lg-3 md-4 mb-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body shadow bg-white rounded">
                            <p class="d-inline-block w-50 mb-3 card-text">Plane Call Sign:</p><span class="border border-warning border-2 p-1 rounded">{{flightDetail.callsign}}</span>
                            <p class="d-inline-block w-50 mb-3 card-text w-5">Departure Date: </p><span class="border border-info border-2 p-1 rounded">{{flightDetail.firstSeen * 1000 }}</span>         
                            <p class="d-inline-block w-50 mb-3 card-text">Departure Time:  </p><span class="border border-primary border-2 p-1 rounded">{{flightDetail.firstSeen * 1000 }}</span>
                            <p class="d-inline-block w-50 mb-3 card-text">Arrival Date:</p><span class="border border-info border-2 p-1 rounded"  >{{flightDetail.lastSeen * 1000 }}</span>
                            <p class="d-inline-block w-50">Arrival Time: </p><span class="border border-primary border-2 p-1 rounded">{{flightDetail.firstSeen * 1000 }}</span>
                            <p class="card-text"></p>
                            
                                <span class="border border-warning border-2 p-1 rounded" id="callsign">N/A</span>
                            
                        </div>
                    </div>
                    </div>
                </div>
                <div class="d-block ml-10">
                        <div class="d-flex justify-content-center">
                            <div class="spinner-border" style="width: 5rem; height: 5rem;" role="status">
                            <span class="sr-only"></span>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        </>
    )
}