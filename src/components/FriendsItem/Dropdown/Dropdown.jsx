import { useState } from 'react';
import {
  DropdownContainer,
  TimeBox,
  TimeList,
  Text,
  TimeItem,
} from './Dropdown.styled';

const Dropdown = ({ workDays }) => {
  const [isOpen, setIsOpen] = useState(false);
  const daysOfWeek = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const [defaultTime] = useState(getDefaultTime());
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleScheduleClick = (e) => {
    e.stopPropagation();
  };

  function getDefaultTime() {
    if (workDays && workDays.length > 0) {
      const firstWorkDay = workDays[0];
      const from = firstWorkDay.from ? firstWorkDay.from : '11:00';
      const to = firstWorkDay.to ? firstWorkDay.to : '16:00';
      return `${from} - ${to}`;
    } else {
      return 'Day and night';
    }
  }
  return (
    <DropdownContainer>
      <div onClick={handleClick}>
        <Text>
          <p>Time:</p>
          <p> {defaultTime}</p>
        </Text>
      </div>
      {isOpen && (
        <TimeBox>
          {workDays?.length > 0 ? (
            <div onClick={handleScheduleClick}>
              <TimeList>
                {workDays.map((day, index) => {
                  return (
                    <TimeItem key={index}>
                      <p>{daysOfWeek[index]}</p>
                      <p>
                        {day.from}-{day.to}
                      </p>
                    </TimeItem>
                  );
                })}
              </TimeList>
            </div>
          ) : (
            <div></div>
          )}
        </TimeBox>
      )}
    </DropdownContainer>
  );
};
export default Dropdown;
