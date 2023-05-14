import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/features/api'

function Projects() {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects);
 
  useEffect(() => {
    dispatch(actions.apiCallBegan({
      url: '/projects',
      onSuccess: 'projects/projectsReceived'
    }))
  }, [ dispatch ]);

  return (
    <div>
      <h1>Projects</h1>
      {projects.map(project => (
        <h1>{project.projectName}</h1>
      ))}
    </div>
  )
}

export default Projects