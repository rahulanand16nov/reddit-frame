import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders without crashing', () => {shallow(<Header />);});

it('renders current subreddit name', () => {
    const subreddit = 'popular';
    const wrapper = shallow(<Header subreddit={subreddit}/>);
    expect(wrapper.find('.header_subreddit').text()).toEqual(`r/${subreddit}`);
});