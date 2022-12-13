import React from 'react';
import styles from './Projects.module.scss';
import classNames from 'classnames/bind';
import ProjectCard from '../ProjectCard/ProjectCard';
import { PROJECTS } from '../../data';

const cx = classNames.bind(styles);

function Projects() {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('title')}>Personal Projects</h2>

      <div className={cx('row-container')}>
        {PROJECTS.map((item, index) => (
          <ProjectCard key={index} item={item} href={item.href} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
