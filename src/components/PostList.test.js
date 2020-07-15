import React from 'react';
import { shallow } from 'enzyme';
import PostList from './PostList';

it('renders without crashing', () => {
  shallow(<PostList/>);
});

it('renders a list of posts', () => {
  const posts = [
    {
      title: 'This reddit clone rocks part-1',
      url: 'https://www.google.com/',
      author: 'rahulanand16nov',
      score: 15,
      timestamp: '2020-01-05T05:00:00.000Z',
      comments: 12
    },
    {
      title: 'This reddit clone rocks part-2',
      url: 'https://www.facebook.com/',
      author: 'zebra_crossing',
      score: 12,
      timestamp: '2020-02-05T05:00:00.000Z',
      comments: 15
    }
  ];

  const wrapper = shallow(<PostList posts={posts}/>);

  expect(wrapper.children()).toHaveLength(posts.length);
});