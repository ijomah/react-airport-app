import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import PlaneList from './../components/PlaneList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';

const Profile = (props) => {
    const {isAuthenticated, isLoading, isPending} = useAuth0();

            if (isLoading) {
            return (
                <div className="page-layout">
                {/* <PageLoader /> */}
                </div>
            );
            }

    return (
        <div className='w-100 tc grow pa3 ma2 dib bw2 shadow-5'> 
        <h1 className='f1 pa4'>World Flights Record</h1> 
            {isAuthenticated && (
            <>
            <div>
                <SearchBox searchChange={props.onSearchChange}/>
                <div>
                { isPending ? <h1>Loading</h1> :
                    <ErrorBoundary>
                    <PlaneList flights={props.filteredFlight} />
                    </ErrorBoundary>
                }
                </div>
            </div>
        </>
      )}
        </div>
    )
}

export default Profile;