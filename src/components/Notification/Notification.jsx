import PropTypes from 'prop-types';

import {
  NotificationImg,
  NotificationText,
  NotificationBox,
} from './Notification.styled';

export const Notification = ({ text, imgPath }) => {
  return (
    <NotificationBox>
      <NotificationText>{text}</NotificationText>
      <NotificationImg src={imgPath} alt={text} />
    </NotificationBox>
  );
};

Notification.propTypes = {
  text: PropTypes.string,
  imgPath: PropTypes.string,
};
