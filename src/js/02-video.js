import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const currentTime = localStorage.getItem('videoplayer-current-time')
  ? localStorage.getItem('videoplayer-current-time')
  : '0';
const player = new Player(iframe);

const onPlay = data => {
  localStorage.setItem('videoplayer-current-time', `${data.seconds}`);
};

player.setCurrentTime(currentTime);
player.on('timeupdate', throttle(onPlay, 1000));
