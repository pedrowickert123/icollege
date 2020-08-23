import React from 'react';
import { Switch } from 'react-router-dom';
import {
  Auth,
  Students,
  Student,
  Teacher,
  Teachers,
  Course,
  Courses,
  Subject,
  Subjects,
  Classes,
  Class,
} from '../pages';
import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Auth} />
      <Route path="/student" exact component={Student} isPrivate />
      <Route path="/student/:id" component={Student} isPrivate />
      <Route path="/students" component={Students} isPrivate />
      <Route path="/teacher" exact component={Teacher} isPrivate />
      <Route path="/teacher/:id" component={Teacher} isPrivate />
      <Route path="/teachers" component={Teachers} isPrivate />
      <Route path="/course" exact component={Course} isPrivate />
      <Route path="/course/:id" component={Course} isPrivate />
      <Route path="/courses" component={Courses} isPrivate />
      <Route path="/subject" exact component={Subject} isPrivate />
      <Route path="/subject/:id" component={Subject} isPrivate />
      <Route path="/subjects" component={Subjects} isPrivate />
      <Route path="/class" exact component={Class} isPrivate />
      <Route path="/class/:id" component={Class} isPrivate />
      <Route path="/classes" component={Classes} isPrivate />
    </Switch>
  );
}
