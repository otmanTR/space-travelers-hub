import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missionSlice';

export default function Mission({
  id, name, description, reserved,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <section className="missions">
        <div>
          <ul className="missionList">
            <li className="missionListElements">
              <h2>{name}</h2>
            </li>
            <li className="missionListElements">
              <p>{description}</p>
            </li>
            <li className="missionListElements">
              <h3 className='status ? "active" : "notActive"'>
                {reserved ? 'Active Member' : 'Not A MEMBER'}
              </h3>
            </li>
            <li className="missionListElements">
              <button
                type="button"
                onClick={
                  reserved
                    ? () => {
                      dispatch(leaveMission(id));
                    }
                    : () => {
                      dispatch(joinMission(id));
                    }
                }
              >
                {reserved ? 'Leave Mission' : 'Join Mission'}
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
