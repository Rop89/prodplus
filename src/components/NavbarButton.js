import React from 'react';
import { Grommet, Box, Button, DropButton, Heading, Text } from 'grommet';
import PropTypes from 'prop-types';
import { Close } from 'grommet-icons';



const theme = {
  global: {
    colors: {
      text: '#FFFFFF'
      }
  },
  button: {
    primary: {
      color: '#A7F3D0'
    }
  },
}

const DropContent = ({ onClose }) => (
  <Box pad="small">
    <Box direction="row" justify="between" align="center" >
      <Heading level={3} margin="small">
        Heading
      </Heading>
      <Button 
      icon={<Close />} 
      onClick={onClose}
      />
    </Box>
    <Text>Content</Text>
  </Box>
);

DropContent.propTypes = {
  onClose: PropTypes.func.isRequired,
};

const NavbarButton = () => {
  const [open, setOpen] = React.useState();
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  return (
    <Grommet theme={theme}>
      <Box 
      align="center" 
      pad="large"
      margin={{top:"large"}}
      >
        <DropButton
          label="Open"
          open={open}
          onOpen={onOpen}
          onClose={onClose}
          dropContent={<DropContent onClose={onClose} />}
          dropProps={{ align: { top: 'bottom' }  }}
          primary
          color = '#A7F3D0'
        />
      </Box>
    </Grommet>
  );
  }


export const Simple = () => <NavbarButton />;
Simple.story = {
  parameters: {
    chromatic: { disable: true },
  },
};


export default NavbarButton;