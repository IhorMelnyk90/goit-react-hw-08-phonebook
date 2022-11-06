import React from 'react';
import PropTypes from 'prop-types';
import { SectionGeneral } from './Section.styled';

const Section = ({ children }) => <SectionGeneral>{children}</SectionGeneral>;

Section.propType = {
  children: PropTypes.object.isRequired,
};

export default Section;
