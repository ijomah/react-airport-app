import React from "react";
import PlaneList from './PlaneList';
import SearchBox from './SearchBox';
import ErrorBoundary from './ErrorBoundary';
import { useAuth0 } from "@auth0/auth0-react";
import ScrollPage from "./scroll";
// import useAuth0 from 'auth0-js';

// class Profile extends Component {
    const Dashboard = (props) => {
        // const isAuthenticated
        // const isPending
        const { isAuthenticated, isPending } = useAuth0();
                // if (isLoading) {
                // return (
                //     <div className="page-layout">
                //     {/* <PageLoader /> */}
                //     </div>
                // );
                // }

        return (
            <div className='w-100 tc pa1 ma1 dib bw2 shadow-5'> 
            {/* <h1 className='f1 pa3'>World Flights Record</h1>  */}
                {isAuthenticated && (
                <>
                <div>
                    <div>
                        <SearchBox searchChange={props.onSearchChange}/>
                    </div>
                    <div>
                        <ScrollPage>
                            { isPending ? <h1>Loading</h1> :
                                <ErrorBoundary>
                                        <PlaneList flights={props.filteredFlight} />
                                </ErrorBoundary>
                            } 
                        </ScrollPage>
                    </div>
                </div>
            </>
        )}
            </div>
        )
}

export default Dashboard;