import Media from 'react-media';
import HomeTabDesktop from './HomeTabDesktop';
import HomeTabMobile from './HomeTabMobile';

export default function HomeTab() {
  return (
    <Media
      queries={{
        mobile: '(max-width: 767px)',
      }}
    >
      {({ mobile }) => <>{mobile ? <HomeTabMobile /> : <HomeTabDesktop />}</>}
    </Media>
  );
}
