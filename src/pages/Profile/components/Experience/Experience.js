import React from 'react';
import classNames from 'classnames/bind';
import styles from './Experience.module.scss';

const cx = classNames.bind(styles);

function Experience() {
  return (
    <>
      <div className={cx('wrapper')}>
        <h2 className={cx('title')}>Project Experience</h2>

        <div className={cx('experience-container')}>
          <div className={cx('experience-card')}>
            <h1 className={cx('experience-header-copy')}>Spotify</h1>
            <h1 className={cx('work-dates')}>Nov 6 - Nov 30</h1>
            <div className={cx('heart-bullet')}>
              <img
                src="https://uploads-ssl.webflow.com/6156d79b685c2b652cd52eb9/6157946790f93e5264dd3dc9_heart-grey.svg"
                loading="lazy"
                alt=""
                className={cx('heart-bullet-child')}
              />
              <h1 className={cx('bullet-text')}>
                Spotify is a music streaming service, which allows users to
                search and listen to their favorite songs.
              </h1>
            </div>
            <div className={cx('heart-bullet')}>
              <img
                src="https://uploads-ssl.webflow.com/6156d79b685c2b652cd52eb9/6157946790f93e5264dd3dc9_heart-grey.svg"
                loading="lazy"
                alt=""
                className={cx('heart-bullet-child')}
              />
              <h1 className={cx('bullet-text')}>
                Tech Stack: ReactJs (Hook), Redux Toolkit
              </h1>
            </div>
            <div className={cx('heart-bullet')}>
              <img
                src="https://uploads-ssl.webflow.com/6156d79b685c2b652cd52eb9/6157946790f93e5264dd3dc9_heart-grey.svg"
                loading="lazy"
                alt=""
                className={cx('heart-bullet-child')}
              />
              <h1 className={cx('bullet-text')}>
                The application allows users to search and listen to their
                favorite songs, albums, playlists.
              </h1>
            </div>
          </div>

          <div className={cx('experience-card')}>
            <h1 className={cx('experience-header-copy')}>Fiverr</h1>
            <h1 className={cx('work-dates')}>Oct 2022 - Nov 2022</h1>
            <div className={cx('heart-bullet')}>
              <img
                src="https://uploads-ssl.webflow.com/6156d79b685c2b652cd52eb9/6157946790f93e5264dd3dc9_heart-grey.svg"
                loading="lazy"
                alt=""
                className={cx('heart-bullet-child')}
              />
              <h1 className={cx('bullet-text')}>
                Fiverr is a Freelance Services Market, which helps users book
                digital services offered by freelancers in various categories
              </h1>
            </div>
            <div className={cx('heart-bullet')}>
              <img
                src="https://uploads-ssl.webflow.com/6156d79b685c2b652cd52eb9/6157946790f93e5264dd3dc9_heart-grey.svg"
                loading="lazy"
                alt=""
                className={cx('heart-bullet-child')}
              />
              <h1 className={cx('bullet-text')}>
                Tech Stack: Front-end: AngularJs, Typescript. Back-end: MongoDb,
                NodeJs, ExpressJs
              </h1>
            </div>
            <div className={cx('heart-bullet')}>
              <img
                src="https://uploads-ssl.webflow.com/6156d79b685c2b652cd52eb9/6157946790f93e5264dd3dc9_heart-grey.svg"
                loading="lazy"
                alt=""
                className={cx('heart-bullet-child')}
              />
              <h1 className={cx('bullet-text')}>
                The application helps users book digital services offered by
                freelancers in variouscategories, and also allows admins to add,
                edit, delete users and gigs.
              </h1>
            </div>
          </div>

          <div className={cx('experience-card')}>
            <h1 className={cx('experience-header-copy')}>
              Workforce Management
            </h1>
            <h1 className={cx('work-dates')}>Aug 2022 - Sep 2022</h1>
            <div className={cx('heart-bullet')}>
              <img
                src="https://uploads-ssl.webflow.com/6156d79b685c2b652cd52eb9/6157946790f93e5264dd3dc9_heart-grey.svg"
                loading="lazy"
                alt=""
                className={cx('heart-bullet-child')}
              />
              <h1 className={cx('bullet-text')}>
                The application helps employees check in/out or register
                absences in workplace,and also allows managers to track the
                absence and time reports of employees.
              </h1>
            </div>
            <div className={cx('heart-bullet')}>
              <img
                src="https://uploads-ssl.webflow.com/6156d79b685c2b652cd52eb9/6157946790f93e5264dd3dc9_heart-grey.svg"
                loading="lazy"
                alt=""
                className={cx('heart-bullet-child')}
              />
              <h1 className={cx('bullet-text')}>
                Tech Stack: EJS, Node.js, Express.js, MongoDB (Mongoose).
              </h1>
            </div>
            <div className={cx('heart-bullet')}>
              <img
                src="https://uploads-ssl.webflow.com/6156d79b685c2b652cd52eb9/6157946790f93e5264dd3dc9_heart-grey.svg"
                loading="lazy"
                alt=""
                className={cx('heart-bullet-child')}
              />
              <h1 className={cx('bullet-text')}>
                The application helps employees check in/out or register
                absences in workplace,and also allows managers to track the
                absence and time reports of employees.
              </h1>
            </div>
          </div>

          <div className={cx('experience-card')}>
            <h1 className={cx('experience-header-copy')}>Nikkei Asia</h1>
            <h1 className={cx('work-dates')}>April 2022 - May 2022</h1>
            <div className={cx('heart-bullet')}>
              <img
                src="https://uploads-ssl.webflow.com/6156d79b685c2b652cd52eb9/6157946790f93e5264dd3dc9_heart-grey.svg"
                loading="lazy"
                alt=""
                className={cx('heart-bullet-child')}
              />
              <h1 className={cx('bullet-text')}>
                The application provides the latest news around the world.
              </h1>
            </div>
            <div className={cx('heart-bullet')}>
              <img
                src="https://uploads-ssl.webflow.com/6156d79b685c2b652cd52eb9/6157946790f93e5264dd3dc9_heart-grey.svg"
                loading="lazy"
                alt=""
                className={cx('heart-bullet-child')}
              />
              <h1 className={cx('bullet-text')}>
                Tech Stack: HTML, CSS, jQuery, Bootstrap
              </h1>
            </div>
            <div className={cx('heart-bullet')}>
              <img
                src="https://uploads-ssl.webflow.com/6156d79b685c2b652cd52eb9/6157946790f93e5264dd3dc9_heart-grey.svg"
                loading="lazy"
                alt=""
                className={cx('heart-bullet-child')}
              />
              <h1 className={cx('bullet-text')}>
                The application provides the latest news around the world.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
