import { connect } from 'react-redux';
import Header from '../components/Header';

function mapStateToProps(state) {
    return {
        current_subreddit: state.current_subreddit
    };
}

export default connect(mapStateToProps)(Header);