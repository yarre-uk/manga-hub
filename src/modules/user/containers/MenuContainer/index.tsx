import { Button, ContainerSection, Title } from '@/components';

const ProfileContainer = () => {
  return (
    <ContainerSection>
      <Title>Profile Menu</Title>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="success">Success</Button>
      <Button variant="info">Info</Button>
    </ContainerSection>
  );
};

export default ProfileContainer;
