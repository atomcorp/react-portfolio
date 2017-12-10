import React from 'react';

export default function ProjectPage(props) {

  const project = props.project;
  return (
    <section>
      Hi { project.name }
    </section>
  );
}