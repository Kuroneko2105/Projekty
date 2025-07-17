import { Container } from 'react-bootstrap';
import { Forum } from './Forum.ts';
import { ForumItem } from './ForumItem.tsx';

type Props = {
  wpisy: Forum[];
};

function ForumPage({ wpisy }: Props) {
  return (
    <Container className='Wpis-custom shadow-sm m-5 position-relative'>
    <div className="tlo-custom position-absolute"></div>
    <div className="position-relative p-3">
      <div className="scroll-container">
        {wpisy.map((item, index) => (
          <ForumItem key={index} forum={item} />
        ))}
      </div>
    </div>
    </Container>
  );
}

export default ForumPage;