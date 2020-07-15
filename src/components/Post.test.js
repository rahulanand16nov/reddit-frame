import React from 'react';
import { shallow } from 'enzyme';
import Post from './Post';
import moment from 'moment';

it('renders without crashing', () => {
    shallow(<Post />);
});

it('renders information about the post', () => {
    const data = {
        title: 'This reddit clone rocks!!',
        url: 'http://www.google.com/',
        author: 'rahulanand16nov',
        score: 10,
        timestamp: '2020-01-05T05:00:00.000Z',
        comments: 10
    };

    const wrapper = shallow(
        <Post
            title={data.title}
            url={data.url}
            author={data.author}
            score={data.score}
            timestamp={data.timestamp}
            comments={data.comments} 
        />
    );

    expect(wrapper.find('.post_title').text()).toEqual(data.title);
    expect(wrapper.find('.post_url').text()).toEqual(data.url);
    expect(wrapper.find('.post_author').text()).toEqual('u/' + data.author);
    expect(wrapper.find('.post_timestamp').text()).toEqual(moment(data.timestamp).fromNow());
    expect(wrapper.find('.post_comments').text()).toEqual(`${data.comments} comments`);
    expect(wrapper.find('.vote_score').text()).toEqual(data.score.toString());
});