import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CourseListContainer from './course/CourseListContainer';
import AddOrEditCourseContainer from './course/AddOrEditCourseContainer';

const App = () => {
    return (
        <div >
            <Router>
                <div>

                    <Switch>
                        <Route exact path="/" component={CourseListContainer} />
                        <Route exact path="/course" component={AddOrEditCourseContainer} />
                        <Route path="/course/:id" component={AddOrEditCourseContainer} />
                    </Switch>

                </div>

            </Router>
        </div>
    );
};


export default App;